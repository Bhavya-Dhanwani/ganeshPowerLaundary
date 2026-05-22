import { NextResponse } from "next/server";
import { isAuthenticatedCookie, SESSION_COOKIE } from "@/application/auth";

export function proxy(request) {
  const session = request.cookies.get(SESSION_COOKIE)?.value;

  if (!isAuthenticatedCookie(session)) {
    return NextResponse.redirect(new URL("/login?next=/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
