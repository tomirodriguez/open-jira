import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { mongoIdChecker } from './middlewareHelpers/mongoIdChecker';

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/api/entries/')) {
    mongoIdChecker(req);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // '/api/:path',
    '/api/entries/:path',
  ],
};
