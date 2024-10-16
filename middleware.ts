import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { validateJWTToken } from './utils/JWTTokens'
import { tokenData } from './validations/propsTypes'
import { insertTokenDataOnHeaders } from './helpers/tokenizeHeader'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // check if the user is logged in, if so redirect them from /signup to /profile
  // similar case for /login
  if (request.nextUrl.pathname.startsWith('/signup')) {
    // validating the token
    const isValid = await validateJWTToken(request)

    if (!isValid.success) {
      return NextResponse.rewrite(new URL('/signup', request.url))
    } else {
      return NextResponse.rewrite(new URL("/profile", request.url))
    }
  }
  // check if the user is logged in, if not redirect them from /profile to /singup
  if (request.nextUrl.pathname.startsWith("/profile")) {
    const isValid = await validateJWTToken(request);
    if (!isValid.success && !isValid.data?.id) {
      return NextResponse.rewrite(new URL('/signup', request.url))
    } else {
      const tokenInfo = isValid.data as tokenData
      return NextResponse.rewrite(new URL(`/profile/${tokenInfo.id}`, request.url))
    }
  }

  // actual authentication middleware, verifying user before making the request
  // based on the saved JWT token
  if (request.nextUrl.pathname.startsWith("/api/users/me") ||
    request.nextUrl.pathname.startsWith("/api/users/verifyEmail")) {
    const isValid = await validateJWTToken(request);

    if (!isValid.success && !isValid.data?.id) {
      return NextResponse.rewrite(new URL("/signup", request.url))
    }

    const tokenInfo = isValid.data as tokenData

    const requestHeaders = insertTokenDataOnHeaders(tokenInfo, request)

    const response = NextResponse.next({
      request: {
        // New request headers
        headers: requestHeaders,
      },
    })

    return response
  }

  if (request.nextUrl.pathname.startsWith("/api/users/resetPassword")) {
    const isValid = await validateJWTToken(request)
    if (!isValid.success) {
      return NextResponse.json({
        success: false,
        error: isValid.error
      }, { status: 401 }) // TODO: Change this later
    }

    const tokenInfo = isValid.data as tokenData

    const requestHeaders = insertTokenDataOnHeaders(tokenInfo, request)

    const response = NextResponse.next({
      request: {
        // New request headers
        headers: requestHeaders,
      },
    })

    return response
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/profile",
    "/signup",
    "/api/users/me",
    "/api/users/verifyEmail/:path*",
    "/api/users/resetPassword"
  ]
}
