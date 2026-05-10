
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stephen Bacani - Full Stack Developer",
  description: "Modern developer portfolio showcasing projects, skills, and experience in web and mobile development.",
  keywords: ["developer", "portfolio", "react", "next.js", "full-stack"],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900">
        {children}
      </body>
    </html>
  );

}
