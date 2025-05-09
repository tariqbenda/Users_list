
import "./globals.css";
import { Providers } from "./providers";

export default function  RootLayout({ children } : { children: React.ReactNode }) {

  return (
    <html>
      <body className="antialiased flex items-center justify-center bg-black w-screen h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
