import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Landrup Dans",
  description: "Kom og dans med os!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
