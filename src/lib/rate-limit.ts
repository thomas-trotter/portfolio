import { contactConfig } from "@/lib/config/contact";

const store = new Map<string, number[]>();

export function isRateLimited(
  key: string,
  {
    max = contactConfig.rateLimit.max,
    windowMs = contactConfig.rateLimit.windowMs,
  } = {},
): boolean {
  const now = Date.now();
  const recent = (store.get(key) ?? []).filter(
    (timestamp) => now - timestamp < windowMs,
  );

  if (recent.length >= max) {
    return true;
  }

  recent.push(now);
  store.set(key, recent);
  return false;
}
