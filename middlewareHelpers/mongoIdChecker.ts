import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const mongoIdChecker = (req: NextRequest) => {
  const id = req.nextUrl.pathname.replace('/api/entries/', '');
  const mongoIdRegex = /^[0-9a-fA-F]{24}$/;

  if (!mongoIdRegex.test(id)) {
    const url = req.nextUrl.clone();
    url.pathname = '/api/bad-request';
    url.search = `?message=${id} is not a valid ID.`;

    return NextResponse.rewrite(url);
  }
};
