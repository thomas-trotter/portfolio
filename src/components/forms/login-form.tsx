"use client";

import classNames from "classnames";
import { useActionState } from "react";

import FieldError from "@/components/ui/field-error";
import FormAlert from "@/components/ui/form-alert";
import PasswordField from "@/components/ui/password-field";
import { login, type LoginState } from "@/lib/actions/auth";

export default function LoginForm() {
  const [state, action, isPending] = useActionState<LoginState, FormData>(
    login,
    { ok: false } as LoginState,
  );

  return (
    <form className="flex flex-col gap-3.5 text-left" action={action}>
      {state.message && !state.ok && <FormAlert message={state.message} />}

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
