import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/globals.css";
// import Header from "./_components/Header";

export const metadata = {
  title: {
    template: "%s / Filin Art",
    default: "Welcome / Filin Art",
  },
  description: "Filin Art, an art galery by Anna Filin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* antialiased bg-primary-950 text-primary-100 */}
      <body
        className={`${josefin.className} antialiased  bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <header className="flex items-center justify-around">
          <Logo />
          <Navigation />
        </header>

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
