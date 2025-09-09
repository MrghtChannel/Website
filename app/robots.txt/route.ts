import { NextResponse } from "next/server";

export async function GET() {
  const content = `
User-agent: *
Disallow: /*/about
Disallow: /*/contact
Disallow: /*/cookies
Allow: /

Sitemap: https://mrghtchannel.vercel.app/sitemap.xml
  `.trim();

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
