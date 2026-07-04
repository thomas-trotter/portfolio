import { createBrowserClient } from "@supabase/ssr";

import { supabasePublishableKey, supabaseUrl } from "@/lib/supabase/constants";

export function createClient() {
  return createBrowserClient(supabaseUrl!, supabasePublishableKey!);
}
