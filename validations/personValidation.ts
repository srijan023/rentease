import { typePerson } from "./propsTypes"
import { loginSchema, personSchema } from "./zodSchemas/personSchema"


export function validateSignupRequest(reqBody: typePerson) {
  const validationResult = personSchema.safeParse(reqBody)

  if (!validationResult.success) {
    return {
      "success": false,
      "errors": validationResult.error.flatten()
    }
  }
  else {
    return {
      "success": true
    }
  }
}

export function validateLoginRequest(reqBody: { email: string, password: string }) {

  const validationResult = loginSchema.safeParse(reqBody)

  if (!validationResult.success) {
    return {
      "sucesss": false,
      "errors": validationResult.error.flatten()
    }
  } else {
    return {
      "success": true
    }
  }


}
