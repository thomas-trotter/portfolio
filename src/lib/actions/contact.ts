"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { Resend } from "resend";
import { site } from "@/.velite";
import { contactConfig } from "@/lib/config/contact";
import { isRateLimited } from "@/lib/rate-limit";
import {
  contactSchema,
  contactValuesFromFormData,
  type ContactValues,
} from "@/lib/validation";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactState = {
  ok: boolean;
  errors?: Record<string, string[]>;
  message?: string;
  values?: ContactValues;
};

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = Object.fromEntries(formData);
  const values = contactValuesFromFormData(raw);
  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      ok: false,
      errors: z.flattenError(parsed.error).fieldErrors,
      values,
    };
  }

  const { name, email, subject, message, website } = parsed.data;

  // Bot filled the hidden field — pretend success so it learns nothing.
  if (website) {
    return { ok: true, message: contactConfig.messages.honeypot };
  }

  const headerStore = await headers();
  const clientIp =
    headerStore.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headerStore.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(clientIp)) {
    return {
      ok: false,
      message: contactConfig.messages.rateLimit,
      values,
    };
  }

  const { error } = await resend.emails.send({
    from: contactConfig.from,
    to: site.email,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    return { ok: false, message: contactConfig.messages.error, values };
  }

  return { ok: true, message: contactConfig.messages.success };
}
