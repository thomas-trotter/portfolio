import Link from "next/link";

import PageLayout from "@/components/layout/page-layout";
import LoginForm from "@/components/forms/login-form";

export default function AdminPage() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-[340px] px-6 py-14 text-center md:px-11">
        <h1 className="mb-6 text-[21px] font-semibold tracking-[-0.01em] text-ink">
          Admin login
        </h1>

        <LoginForm />

        <Link
          href="/"
          className="mt-6 inline-block font-mono text-xs text-muted transition-colors hover:text-accent"
        >
          ← Back to site
        </Link>
      </section>
    </PageLayout>
  );
}
