import { z } from "zod";

export const auxPersonSchema = z.object({
  name: z.string({
    required_error: "Name field is required",
  }),
  email: z.string().email("Invalid email").optional(),
  contact: z.string({ required_error: "Contact field is required" }),
  state: z.string({ required_error: "You need to provide a state" }),
  region: z.string({ required_error: "You need to provide a region" }),
  sub_division: z.string().optional(),
  street: z.string().optional(),
});
