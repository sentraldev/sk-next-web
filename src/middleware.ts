import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Temporary maintenance middleware: redirect everything to /be-right-back
// while allowing essential assets and the maintenance page itself.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow specific paths and assets to pass through
  const allowedPrefixes = [
    // "/be-right-back",
    "/_next", // Next.js internal assets (build output)
    "/api", // API routes (keep if you still need API access)
    "/products/", // Allow product detail pages e.g., /products/:id
    "/products", // Allow product detail pages e.g., /products/:id
    "/our-location",
    "/service-center",
    "/article",
  ];

  // Allow static assets by extension (served from /public)
  const isStaticAsset =
    /\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|txt|xml|json|woff2?|ttf|eot)$/i.test(
      pathname
    );

  if (
    pathname === "/" || // allow home page
    pathname === "/about-us" ||
    pathname === "/be-right-back" || // allow maintenance page itself
    allowedPrefixes.some((prefix) => pathname.startsWith(prefix)) ||
    isStaticAsset ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  // Redirect everything else to the maintenance page
  const url = request.nextUrl.clone();
  url.pathname = "/be-right-back";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/:path*",
};
