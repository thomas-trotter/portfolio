import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.email("Enter a valid email"),
  subject: z.string().min(1, "Subject is required").max(150),
  message: z.string().min(10, "Message is a bit short").max(5000),
  website: z.string().max(0).optional(),
});

export const loginSchema = z.object({
  email: z.email("Enter a valid email"),
  password: z.string().min(1, "Password is required"),
})