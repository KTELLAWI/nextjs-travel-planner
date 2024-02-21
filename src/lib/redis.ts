import Redis from "ioredis";

// You can get the REDIS_URL from your environment variables
const REDIS_URL =
  process.env.REDIS_URL ||
  "redis://default:5689ef16734042e5b9456919820c1134@eu1-just-jaguar-38734.upstash.io:38734";

const connection = new Redis(REDIS_URL);

export { connection };
