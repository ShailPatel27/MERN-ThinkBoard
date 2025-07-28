import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

import dotenv from "dotenv";

dotenv.config();

// Create a ratelimiter that allows 10 requests per 5 seconds
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, "5s"),
});

export default ratelimit;