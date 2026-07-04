"use client";

import { useActionState, useEffect, useState } from "react";
import { Check, CircleAlert } from "lucide-react";
import FormField from "@/components/ui/form-field";
import { sendContactEmail, type ContactState } from "@/lib/actions/contact";

const initialState: ContactState = { ok: false };

export default function ContactForm() {
  const [state, action, isPending] = useActionState(
    sendContactEmail,
    initialState,
  );
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state.ok) setShowSuccess(true);
  }, [state.ok]);

  if (showSuccess && state.ok) {
    return (
      <div className="flex flex-1 flex-col items-start gap-3.5 rounded-[10px] border border-[oklch(0.7_0.1_150)] bg-[oklch(0.94_0.05_150)] p-7">
        <div className="flex size-11 items-center justify-center rounded-full bg-[oklch(0.4_0.1_150)] text-white">
          <Check className="size-5" strokeWidth={2.5} aria-hidden />
        </div>
        <p className="text-lg font-bold text-[oklch(0.25_0.05_150)]">
          Message sent
        </p>
        <p className="m-0 text-body leading-[1.7] text-[oklch(0.3_0.05_150)]">
          {state.message ??
            "Thanks for reaching out — I'll get back to you within a couple of days."}
        </p>
        <button
          type="button"
          className="btn-outline"
          onClick={() => setShowSuccess(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="flex flex-1 flex-col gap-3.5" action={action}>
      {state.message && !state.ok && (
        <div className="flex items-start gap-2.5 rounded-lg border border-[oklch(0.7_0.15_25)] bg-[oklch(0.95_0.04_25)] px-3.5 py-3">
          <CircleAlert
            className="size-4 shrink-0 text-[oklch(0.45_0.15_25)]"
            aria-hidden
          />
          <p className="m-0 text-[13px] leading-[1.7] text-[oklch(0.35_0.1_25)]">
            {state.message}
          </p>
        </div>
      )}

      <FormField
        name="name"
        placeholder="Name"
        error={state.errors?.name}
        autoComplete="name"
      />
      <FormField
        name="email"
        type="email"
        placeholder="Email"
        error={state.errors?.email}
        autoComplete="email"
      />
      <FormField
        name="subject"
        placeholder="Subject"
        error={state.errors?.subject}
      />
      <FormField
        name="message"
        placeholder="Message"
        error={state.errors?.message}
        multiline
      />

      <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <button type="submit" className="btn-primary self-start">
        {isPending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
