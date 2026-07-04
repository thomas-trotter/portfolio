import { logout } from "@/lib/actions/auth";

export default function AdminTopBar() {
  return (
    <header className="flex items-center justify-between bg-ink px-6 py-[22px] md:px-11">
      <div className="text-xl font-bold tracking-[-0.02em] text-white">
        Admin
      </div>

      <div className="flex items-center gap-[30px] text-[13px] text-faint">
        <form action={logout}>
          <button
            type="submit"
            className="transition-colors hover:text-white"
          >
            Log out
          </button>
        </form>
      </div>
    </header>
  );
}
