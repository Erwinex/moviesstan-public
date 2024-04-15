import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moviesstan your favourite movie database",
  description:
    "Moviesstan is a movie database an alternative for IMDb (don't take it seriously it's just a challenge for myself 🙃) that use TMDB movie and series database and help you to find the movie od series you want.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
