import { typeProperty } from "./propsTypes";
import { propertySchema } from "./zodSchemas/propertySchema";

export function validatePropertyData(reqData: typeProperty) {
  const validationResult = propertySchema.safeParse(reqData)

  if (!validationResult.success) {
    return {
      success: false,
      error: validationResult.error.flatten()
    }
  } else {
    return {
      success: true
    }
  }
}
