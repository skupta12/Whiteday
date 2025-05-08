import { z } from "zod";


export const schema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phoneNumber: z
    .string()
    .optional(),
  desc: z
    .string()
    .optional()
});
