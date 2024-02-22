import Redis from "ioredis";

// You can get the REDIS_URL from your environment variables
const REDIS_URL =
  "redis://default:5689ef16734042e5b9456919820c1134@eu1-just-jaguar-38734.upstash.io:38734" ||
  "rediss://red-cnb88jv79t8c73bmbh30:zYKCWGz43OSCuwJzzCB4zOO8Ns6A2lZ0@oregon-redis.render.com:6379";

const connection = new Redis(REDIS_URL);

export { connection };
