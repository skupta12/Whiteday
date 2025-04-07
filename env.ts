import { z } from "zod";

const envSchema = z.object({
  SITE_NAME: z.string(),
  SHOPIFY_REVALIDATION_SECRET: z.string(),
  SHOPIFY_STOREFRONT_ACCESS_TOKEN: z.string(),
  SHOPIFY_STORE_DOMAIN: z.string(),
});

envSchema.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}