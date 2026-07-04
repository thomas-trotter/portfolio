"use client";

import { CircleAlert } from "lucide-react";
import classNames from "classnames";
import { useActionState } from "react";

import FieldError from "@/components/ui/field-error";
import PasswordField from "@/components/ui/password-field";
import { login, type LoginState } from "@/lib/actions/auth";

export default function LoginForm() {
  const [state, action, isPending] = useActionState<LoginState, FormData>(
    login,
    { ok: false } as LoginState,
  );

  return (
    <form className="flex flex-col gap-3.5 text-left" action={action}>
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

      <input
        type="email"
        name="email"
        className={classNames("input text-faint", {
          "border-[oklch(0.55_0.18_25)]": !!state.errors?.email,
        })}
        placeholder="Email"
        autoComplete="email"
        required
      />
      {state.errors?.email && <FieldError message={state.errors.email[0]} />}

      <PasswordField
        name="password"
        placeholder="Password"
        autoComplete="current-password"
        required
      />
      {state.errors?.password && (
        <FieldError message={state.errors.password[0]} />
      )}

      <button type="submit" className="btn-primary w-full" disabled={isPending}>
        {isPending ? "Logging in..." : "Log in"}
      </button>
    </form>
  );
}
