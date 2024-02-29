import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Main from "./components/main";
import { ThemeProvider } from "./mtComponents";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tickets app",
  description: "",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <Main>{children}</Main>
        </ThemeProvider>
      </body>
    </html>
  );
}
