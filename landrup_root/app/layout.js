import { Ubuntu, Roboto, Racing_Sans_One } from "next/font/google";
import "./globals.css";
import { ApiWrapper, LoginWrapper } from "@/context";

const ubuntu = Ubuntu({
  weight: '400',
  subsets: ["latin"]
});

const roboto = Roboto({
  weight: '400',
  subsets: ["latin"]
});

const racingSansOne = Racing_Sans_One({
  weight: '400',
  subsets: ["latin"]
});

export { ubuntu, roboto, racingSansOne };

export const metadata = {
  title: "Landrup Dans",
  description: "Kom og dans med os!",
  favicon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <LoginWrapper>
        <ApiWrapper>
          <body className={ubuntu.className}>
            {children}
          </body>
        </ApiWrapper>
      </LoginWrapper>
    </html>
  );
}
