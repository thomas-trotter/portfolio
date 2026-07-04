import { createBrowserClient } from "@supabase/ssr";
import { supabaseUrl, supabasePublishableKey } from "@/lib/supabase/constants";

export const createClient = () =>
  createBrowserClient(
    supabaseUrl!,
    supabasePublishableKey!,
  );