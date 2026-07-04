"use client";

import PasswordField from "@/components/ui/password-field";

export default function ChangePasswordForm() {
  return (
    <form className="flex flex-col gap-3.5 text-left">
      <PasswordField
        name="password"
        placeholder="New password"
        autoComplete="new-password"
        required
      />
      <PasswordField
        name="confirmPassword"
        placeholder="Confirm password"
        autoComplete="new-password"
        required
      />

      <button type="submit" className="btn-primary w-full">
        Update password
      </button>
    </form>
  );
}
