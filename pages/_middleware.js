
import { NextResponse } from "next/server";

/**
 * @param req
 */
export default function middleware(req) {
  const { pathname } = req.nextUrl;
  const hostname = req.headers.get("host");

  const currentHost =
    process.env.NODE_ENV == "production"
      ? hostname?.replace(`.dimitri-b.fr`, "") // PUT YOUR DOMAIN HERE
      : hostname?.replace(`.localhost:3000`, "");

  if (pathname.startsWith(`/_sites`)) {
    return new Response(null, { status: 404 });
  }

  if (
    !pathname.includes(".") && // exclude all files in the public folder
    !pathname.startsWith("/api") // exclude all API routes
  ) {
    // rewrite to the current hostname under the pages/sites folder
    // the main logic component will happen in pages/sites/[site]/index.tsx
    console.log(`http://localhost:3000/_sites/${currentHost}${pathname}`)
    return NextResponse.rewrite(`http://localhost:3000/_sites/${currentHost}${pathname}`);
  }
}