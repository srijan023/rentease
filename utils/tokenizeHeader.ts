import { tokenData } from "@/validations/propsTypes"
import { NextRequest } from "next/server"

export function insertTokenDataOnHeaders(tokenInfo: tokenData, request: NextRequest) {
  const userId = tokenInfo.id.toString()
  const userEmail = tokenInfo.email.toString()
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("id", userId)
  requestHeaders.set("email", userEmail)

  return requestHeaders
}
