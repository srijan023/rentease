import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { validateAdminToken, validateJWTToken } from './utils/JWTTokens'
import { tokenData } from './validations/propsTypes'
import { insertTokenDataOnHeaders } from './utils/tokenizeHeader'

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

  if (request.nextUrl.pathname.startsWith("/api/users") ||
    request.nextUrl.pathname.startsWith("/api/admin")) {
    let isValid
    if (request.nextUrl.pathname.startsWith("/api/admin")) {
      isValid = await validateAdminToken(request)
    } else {
      isValid = await validateJWTToken(request)
    }
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
    "/api/users/:path*",
    "/api/admin/:path*",
  ],
  runtime: 'nodejs'
}
