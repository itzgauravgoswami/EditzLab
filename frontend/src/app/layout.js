import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import BackgroundVideo from "@/components/common/BackgroundVideo";

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "EditzLab — Creative Studio & Digital Production Agency",
  description:
    "Bespoke web development, cinematic video production, commercial photography, and turnkey social media management for ambitious brands.",
  keywords: [
    "creative studio",
    "video editing",
    "commercial photography",
    "web development",
    "social media management",
    "Next.js agency",
    "brand identity",
    "content production",
  ],
  authors: [{ name: "EditzLab" }],
  icons: {
    icon: "/editzlab-logo.png",
    apple: "/editzlab-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} ${monoFont.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#070A11] text-slate-100 font-sans relative selection:bg-blue-600 selection:text-white">
        <BackgroundVideo fps={30} totalFrames={300} />
        {children}
      </body>
    </html>
  );
}
