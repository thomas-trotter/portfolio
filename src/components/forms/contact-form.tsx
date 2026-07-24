"use client";

import { useActionState, useState } from "react";
import { Check, CircleAlert } from "lucide-react";
import FormField from "@/components/ui/form-field";
import { contactConfig } from "@/lib/config/contact";
import { sendContactEmail, type ContactState } from "@/lib/actions/contact";

const initialState: ContactState = { ok: false };

type ContactFormBodyProps = {
  onSendAnother: () => void;
};

function ContactFormBody({ onSendAnother }: ContactFormBodyProps) {
  const [state, action, isPending] = useActionState(
    sendContactEmail,
    initialState,
  );

  if (state.ok) {
    return (
      <div className="flex flex-1 flex-col items-start gap-3.5 rounded-[10px] border border-success-border bg-success-surface p-7">
        <div className="flex size-11 items-center justify-center rounded-full bg-success text-white">
          <Check className="size-5" strokeWidth={2.5} aria-hidden />
        </div>
        <p className="text-lg font-bold text-success-foreground">
          Message sent
        </p>
        <p className="m-0 text-body leading-[1.7] text-success-muted">
          {state.message ?? contactConfig.messages.success}
        </p>
        <button
          type="button"
          className="btn-outline"
          onClick={onSendAnother}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="flex flex-1 flex-col gap-3.5" action={action}>
      {state.message && !state.ok && (
        <div className="flex items-start gap-2.5 rounded-lg border border-error-border bg-error-surface px-3.5 py-3">
          <CircleAlert
            className="size-4 shrink-0 text-error"
            aria-hidden
          />
          <p className="m-0 text-[13px] leading-[1.7] text-error-foreground">
            {state.message}
          </p>
        </div>
      )}

      <FormField
        name="name"
        label="Name"
        placeholder="Name"
        defaultValue={state.values?.name}
        error={state.errors?.name}
        autoComplete="name"
      />
      <FormField
        name="email"
        type="email"
        label="Email"
        placeholder="Email"
        defaultValue={state.values?.email}
        error={state.errors?.email}
        autoComplete="email"
      />
      <FormField
        name="subject"
        label="Subject"
        placeholder="Subject"
        defaultValue={state.values?.subject}
        error={state.errors?.subject}
      />
      <FormField
        name="message"
        label="Message"
        placeholder="Message"
        defaultValue={state.values?.message}
        error={state.errors?.message}
        multiline
      />

      <input
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
      />

      <button type="submit" className="btn-primary self-start">
        {isPending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

export default function ContactForm() {
  const [formKey, setFormKey] = useState(0);

  return (
    <ContactFormBody
      key={formKey}
      onSendAnother={() => setFormKey((key) => key + 1)}
    />
  );
}
