import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/organisms/theme-provider";
import { Header } from "@/components/organisms/header";

export const metadata: Metadata = {
  title: "Kaleb Garner",
  description: "Kaleb Garner - Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
