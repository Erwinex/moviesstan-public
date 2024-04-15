import HeaderItem from "./HeaderItem";

export default function Header() {
  return (
    <header className="flex p-6 lg:text-xl md:text-lg dark:bg-violet-800 bg-violet-300 font-bold items-center sm:justify-center sm:gap-32 justify-between gap-0">
      {/* <Suspense> */}
      <HeaderItem lable="Trending" param="fetchTrending" />
      <HeaderItem lable="Top Rated" param="fetchTopRated" />
      {/* </Suspense> */}
    </header>
  );
}
