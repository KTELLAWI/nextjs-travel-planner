import Redis from "ioredis";

// You can get the REDIS_URL from your environment variables
const REDIS_URL =
  // "redis://default:5689ef16734042e5b9456919820c1134@eu1-just-jaguar-38734.upstash.io:38734" ||
  "rediss://red-cncv95eg1b2c739k5ia0:BF7VaAJVD20xYqEoi04O7gFeEKdwgytU@oregon-redis.render.com:6379";

const connection = new Redis(REDIS_URL);

export { connection };
