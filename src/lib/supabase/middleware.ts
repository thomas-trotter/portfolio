import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";
import { supabaseUrl, supabasePublishableKey } from "@/lib/supabase/constants";

export async function updateSession(request: NextRequest) {
  const supabase = createServerClient(
    supabaseUrl!,
    supabasePublishableKey!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          const supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  const { data } = await supabase.auth.getUser();
  const { pathname } = request.nextUrl;

  if (!data.user && pathname !== "/admin") {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next({
    request,
  });
}
