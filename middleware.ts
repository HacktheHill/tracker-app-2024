import { NextResponse, NextRequest } from 'next/server'
import bodyValidationMiddleware from './middleware/bodyValidation';

export async function middleware(req: NextRequest) {
  let endpoint = new URL(req.url).pathname;

  // middleware for API endpoints here (/api/*)
  if (endpoint.startsWith("/api")) {
    let err = await bodyValidationMiddleware(req, endpoint)
    if (err)
      return NextResponse.json(err.message);
  }

  return NextResponse.next();
}
 
export const config = { // apply the middleware to all paths /*
  matcher: '/:path*',
}

