"use server";

import { z } from "zod";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validation";

const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactState = {
    ok: boolean;
    errors?: Record<string, string[]>;
    message?: string;
};

export async function sendContactEmail(
    _prev: ContactState,
    formData: FormData,
): Promise<ContactState> {
    const parsed = contactSchema.safeParse(
        Object.fromEntries(formData),
    )

    if (!parsed.success) {
        return { ok: false, errors: z.flattenError(parsed.error).fieldErrors };
    }

    const { name, email, subject, message, website } = parsed.data;
    
    // Bot filled the hidden field -> pretend success so it learns nothing
    if (website) {
        return { ok: true, message: "Thanks!"}
    }

    const { error } = await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: email,
        replyTo: email,
        subject: `[Portfolio] ${subject}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      });


    if (error) {
        return { ok: false, message: "Something went wrong - please try again."}
    }

    return { ok: true, message: "Thanks - I'll get back to you soon."};
}