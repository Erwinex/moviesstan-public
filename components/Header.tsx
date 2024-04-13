import { Suspense } from "react";
import HeaderItem from "./HeaderItem";

export default function Header() {
  return (
    <header className="flex p-6 lg:text-xl md:text-lg dark:bg-violet-800 bg-violet-300 font-bold items-center justify-center gap-32">
      <Suspense>
        <HeaderItem lable="Trending" param="fetchTrending" />
        <HeaderItem lable="Top Rated" param="fetchTopRated" />
      </Suspense>
    </header>
  );
}
