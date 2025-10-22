import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script";

export const metadata: Metadata = {
  title: "babo = baka",
  description: "치르노는 바보!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Script
          src="https://app.rybbit.io/api/script.js"
          data-site-id="process.env.NEXT_PUBLIC_RYBBIT_ID"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
