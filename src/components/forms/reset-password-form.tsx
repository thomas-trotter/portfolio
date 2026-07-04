export default function ResetPasswordForm() {
  return (
    <form className="flex flex-col gap-3.5 text-left">
      <input
        type="email"
        name="email"
        className="input"
        placeholder="Email"
        autoComplete="email"
      />

      <button type="submit" className="btn-primary w-full">
        Send reset link
      </button>
    </form>
  );
}
