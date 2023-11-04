import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export async function rateLimit(identifier: string) {
  const rateLimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, "10 s"), // allow users to send up to 10 requests within 10 seconds
    analytics: true,
    prefix: "@upstash/rateLimit",
  });

  return await rateLimit.limit(identifier);
}
