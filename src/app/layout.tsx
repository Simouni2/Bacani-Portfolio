<<<<<<< HEAD
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stephen Bacani - Full Stack Developer",
  description: "Modern developer portfolio showcasing projects, skills, and experience in web and mobile development.",
  keywords: ["developer", "portfolio", "react", "next.js", "full-stack"],
};
=======
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stephen Simoun Gee L. Bacani - Portfolio',
  description: 'Portfolio of Stephen Simoun Gee L. Bacani, Computer Science student from Cagayan State University',
}
>>>>>>> 70dd1577ff7bbaec543b21823de6faed67bd78fb

export default function RootLayout({
  children,
}: {
<<<<<<< HEAD
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900">
        {children}
      </body>
    </html>
  );
=======
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-white">{children}</body>
    </html>
  )
>>>>>>> 70dd1577ff7bbaec543b21823de6faed67bd78fb
}
