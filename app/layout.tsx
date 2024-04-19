import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "Moviesstan your favourite movie database",
  description:
    "Moviesstan is a movie database an alternative for IMDb (don't take it seriously it's just a challenge for myself 🙃) that use TMDB movie and series database and help you to find the movie od series you want.",
};

// This is the layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
