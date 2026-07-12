import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.email("Enter a valid email"),
  subject: z.string().min(1, "Subject is required").max(150),
  message: z.string().min(10, "Message is a bit short").max(5000),
  website: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function contactValuesFromFormData(
  raw: Record<string, FormDataEntryValue>,
): ContactValues {
  return {
    name: String(raw.name ?? ""),
    email: String(raw.email ?? ""),
    subject: String(raw.subject ?? ""),
    message: String(raw.message ?? ""),
  };
}
