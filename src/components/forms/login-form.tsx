"use client";

import Link from "next/link";

import PasswordField from "@/components/ui/password-field";

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-3.5 text-left">
      <input
        type="email"
        name="email"
        className="input text-faint"
        placeholder="Email"
      />

      <PasswordField
        name="password"
        placeholder="Password"
        autoComplete="current-password"
        required
      />

      <div className="text-right text-[13px]">
        <Link
          href="/admin/reset-password"
          className="text-accent hover:underline"
        >
          Forgot password?
        </Link>
      </div>

      <button type="submit" className="btn-primary w-full">
        Log in
      </button>
    </form>
  );
}