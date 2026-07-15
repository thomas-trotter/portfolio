export const contactConfig = {
  from: "Portfolio <onboarding@resend.dev>",
  messages: {
    success: "Thanks — I'll get back to you soon.",
    error: "Something went wrong — please try again.",
    honeypot: "Thanks!",
    rateLimit: "Too many messages — please try again in a minute.",
  },
  rateLimit: {
    max: 3,
    windowMs: 60_000,
  },
} as const;
