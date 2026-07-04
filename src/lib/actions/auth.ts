"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { createClient } from "@/lib/supabase/server";
import { loginSchema } from "@/lib/validation";

export type LoginState = {
  ok: boolean;
  errors?: Record<string, string[]>;
  message?: string;
};

export async function login(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const parsed = loginSchema.safeParse(
    Object.fromEntries(formData),
  );

  if (!parsed.success) {
    return {
        ok: false,
        errors: z.flattenError(parsed.error).fieldErrors,
    };
  }

  const supabase = await createClient();
  const { email, password } = parsed.data;
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { ok: false, message: "Invalid email or password." };
  }

  revalidatePath("/", "layout");
  redirect("/admin/dashboard");
}
