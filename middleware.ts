import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { validateJWTToken } from './utils/JWTTokens'
import { tokenData } from './validations/propsTypes'

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
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/profile', "/signup"],
}
