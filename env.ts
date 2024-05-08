import z from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),

  POSTGRES_DB: z.string().min(1).optional(),
  POSTGRES_USER: z.string().min(1).optional(),
  POSTGRES_PASSWORD: z.string().min(1).optional(),
  POSTGRES_ADDR: z.string().min(1).optional(),

  JWT_SECRET: z.string().min(64),
})

const ENV = envSchema.parse(process.env);
if (ENV.NODE_ENV === 'development')
  console.log(`Generated JWT_SECRET: ${ENV.JWT_SECRET}`);

export default ENV;