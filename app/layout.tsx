import "./globals.css";
import { Providers } from "./providers";
import { Roboto_Condensed } from "next/font/google";

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export default function  RootLayout({ children } : { children: React.ReactNode }) {

  return (
    <html>
      <body className={` ${roboto.className}  antialiased flex items-center justify-center bg-black w-screen h-screen`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
