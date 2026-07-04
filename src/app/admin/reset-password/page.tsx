import Link from "next/link";

import PageLayout from "@/components/layout/page-layout";
import ResetPasswordForm from "@/components/forms/reset-password-form";

export default function ResetPasswordPage() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-[340px] px-6 py-14 text-center md:px-11">
        <h1 className="mb-2.5 text-[21px] font-semibold tracking-[-0.01em] text-ink">
          Reset your password
        </h1>
        <p className="mb-6 text-body leading-[1.7] text-[oklch(0.4_0.01_260)]">
          Enter your email and we&apos;ll send you a link to reset your
          password.
        </p>

        <ResetPasswordForm />

        <Link
          href="/admin"
          className="mt-6 inline-block font-mono text-xs text-muted transition-colors hover:text-accent"
        >
          ← Back to login
        </Link>
      </section>
    </PageLayout>
  );
}
