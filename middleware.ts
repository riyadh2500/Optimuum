import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Only load arcjet if the key is present (avoids build crash)
const getArcjet = async () => {
  if (!process.env.ARCJET_KEY) return null;
  const arcjet = await import("@arcjet/next");
  const aj = arcjet.default({
    key: process.env.ARCJET_KEY,
    rules: [
      arcjet.shield({ mode: "LIVE" }),
      arcjet.detectBot({
        mode: "LIVE",
        allow: [
          "CATEGORY:SEARCH_ENGINE",
          "CURL",
          "VERCEL_MONITOR_PREVIEW",
        ],
      }),
    ],
  });
  return aj;
};

// define public routes
const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/learn(.*)",
  "/api/categories(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  // Run arcjet only if key is available
  try {
    const aj = await getArcjet();
    if (aj) {
      const decision = await aj.protect(req);
      if (decision.isDenied()) {
        return NextResponse.json(
          { error: "Forbidden", reason: decision.reason },
          { status: 403 }
        );
      }
    }
  } catch {
    // Arcjet not configured — continue
  }

  // skip authentication for public routes
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  // authenticate user and protect non-public routes
  await auth.protect();

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
