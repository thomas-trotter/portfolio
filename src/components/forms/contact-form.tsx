"use client";

import { useActionState } from "react";
import { sendContactEmail, type ContactState } from "@/lib/actions/contact";


export default function ContactForm() {

  const [state, action, isPending] = useActionState(sendContactEmail, {
    ok: false,
  } as ContactState);

  if (state.ok) {
    return <p className="text-green-500">{state.message}</p>
  }

  return (
    <form
      className="flex flex-1 flex-col gap-3.5"
      action={action}
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="input"
        autoComplete="name"
      />
      {state.errors?.name && <p className="text-sm text-red-600">{state.errors.name[0]}</p>}
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="input"
        autoComplete="email"
      />
      {state.errors?.email && <p className="text-sm text-red-600">{state.errors.email[0]}</p>}
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="input"
      />
      <textarea
        name="message"
        placeholder="Message"
        rows={4}
        className="input min-h-[90px] resize-y"
      />
      {state.errors?.message && <p className="text-sm text-red-600">{state.errors.message[0]}</p>}
      
      <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      
      <button type="submit" className="btn-primary self-start">
        {isPending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}