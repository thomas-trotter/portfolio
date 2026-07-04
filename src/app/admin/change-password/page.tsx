import PageLayout from "@/components/layout/page-layout";
import ChangePasswordForm from "@/components/forms/change-password-form";

export default function ChangePasswordPage() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-[340px] px-6 py-14 text-center md:px-11">
        <h1 className="mb-2.5 text-[21px] font-semibold tracking-[-0.01em] text-ink">
          Set a new password
        </h1>
        <p className="mb-6 text-body leading-[1.7] text-[oklch(0.4_0.01_260)]">
          Choose a new password for your account.
        </p>

        <ChangePasswordForm />
      </section>
    </PageLayout>
  );
}
