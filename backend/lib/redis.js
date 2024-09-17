import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL);

// import Redis from "ioredis";
// import dotenv from "dotenv";

// dotenv.config();

// if (!process.env.UPSTASH_REDIS_URL) {
//   console.error(
//     "Error: UPSTASH_REDIS_URL is not defined in the environment variables."
//   );
//   process.exit(1);
// }

// export const redis = new Redis(process.env.UPSTASH_REDIS_URL);

// // Add error handling
// redis.on("error", (err) => {
//   console.error("Redis connection error:", err);
// });

// // Add ready event to confirm connection
// redis.on("ready", () => {
//   console.log("Redis is ready and connected successfully!");
// });
