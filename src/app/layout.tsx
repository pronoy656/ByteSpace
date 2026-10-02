import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LayoutShell } from "@/components/shared/LayoutShell";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace – Online Learning & Creator Platform",
  description: "Unlock your potential with ByteSpace. Explore hundreds of expert-led courses across tech, design, business, and creative fields, or create, manage, and monetize your own courses with ease.",
  keywords: ["online learning", "creator platform", "courses", "tech skills", "design", "ByteSpace"],
  icons: {
    icon: "/Vector.png",
  },
  openGraph: {
    title: "ByteSpace – Online Learning & Creator Platform",
    description: "Unlock your potential with ByteSpace. Explore hundreds of expert-led courses across tech, design, business, and creative fields, or create, manage, and monetize your own courses.",
    siteName: "ByteSpace",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
      </head>
      <body className="min-h-full flex flex-col relative bg-white text-[#171717]">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
