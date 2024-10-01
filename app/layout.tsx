import type {Metadata} from "next";
import "./globals.css";
import {Inter} from "next/font/google";
import {ThemeProvider} from "@/components/theme-provider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Abdul Haseeb's Portfolio",
  description: "Frontend Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
