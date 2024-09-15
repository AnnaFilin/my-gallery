import Navigation from "@/app/_components/Navigation";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/globals.css";
import Footer from "./_components/Footer";

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
      <body
        className={`${josefin.className} antialiased  bg-primary-900 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <header className="mb-14 fixed top-0 w-full z-50">
          <Navigation />
        </header>

        <div className="flex-1 px-1 sm:px-8 py-12 pt-24 z-20">
          <main className=" w-full sm:max-w-7xl mx-auto sm:w-full">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
