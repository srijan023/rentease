import { z } from "zod"
import { auxPersonSchema } from "./auxPersonSchema";

const eighteenYearsAgo = new Date();
eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

const hundredYearsAgo = new Date();
hundredYearsAgo.setFullYear(hundredYearsAgo.getFullYear() - 100);

export const loginSchema = z.object({
  email: z.string({ required_error: "Email field is required" }).email(),
  password: z.string().min(6, "Password must be atleast 6 characters long"),
})

export const personSchema = z.object({
  name: z.string({ required_error: "Name field is required" }),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be atleast 6 characters long"),
  backup_email: z.string().email().optional(),
  contact: z.string(),
  dob: z.string()
    .transform(str => new Date(str))
    .refine((date) => !isNaN(date.getTime()), { message: "Invalid date format" }) // Check if it's a valid date
    .refine((date) => date <= eighteenYearsAgo, { message: "You must be at least 18 years old to signup" })
    .refine((date) => date >= hundredYearsAgo, { message: "Invalid date of birth" }),
  ssn: z.string().regex(/^\d{3}-\d{2}-\d{4}$/, "Invalid SSN format").optional(),
  no_ssn_reason: z.string().optional(),
  is_US_citizen: z.boolean(),
  drivers_license: z.string().optional(),
  state_id: z.string().optional(),
  passport: z.string().optional(),
  visa: z.string().optional(),
  is_International_student: z.boolean(),
  i_20: z.string().optional(),
  balance_statement: z.string({
    required_error: "Balance statement is required"
  }),
  emergency_contact: auxPersonSchema,
  prev_landlord: auxPersonSchema.optional(),
  no_residence_detail: z.string().optional()
})
  .refine((data) => {
    if (data.is_US_citizen) {
      return data.drivers_license || data.state_id
    }
    else {
      return data.passport && data.visa
    }
  }, {
    path: ["drivers_license", "state_id", "passport", "visa"],
    message: "A us citizen has to provide either driving liscense or state id and for non citizen password and visa is required"
  })
  .refine(data => {
    if (data.is_International_student) {
      return data.i_20
    }
    return true
  }, {
    path: ["i_20"],
    message: "International student needs to provide their i20"
  })
  .refine(data => {
    if (!data.ssn) {
      return data.no_ssn_reason
    }
    return true
  }, {
    path: ["no_ssn"],
    message: "If SSN is not provided, a valid reason for not having a SSN must be provided"
  })
  .refine(data => {
    if (!data.prev_landlord) {
      return data.no_residence_detail
    }
    return true
  }, {
    path: ["no_residence_detail"],
    message: "If landlord details are not provided, a valid reason for not having a previous address must be provided"
  })

