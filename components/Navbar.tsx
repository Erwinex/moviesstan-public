import MenuItem from "./MenuItem";
import Link from "next/link";
import ThemeSelection from "./ThemeSelection";
import Searchbox from "./Searchbox";
import HamburgerMenu from "./HamburgerMenu";

// That is the navigation bar in the layout
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-1 px-2 w-full bg-violet-100 dark:bg-slate-800 sticky top-0 left-0 z-50">
      <div>
        <HamburgerMenu />
        <div className="hidden md:flex gap-5">
          <MenuItem
            lable="Home page"
            address="/"
            variant="hidden md:inline-block"
          />
          <MenuItem
            lable="About us"
            address="/about"
            variant="hidden md:inline-block"
          />
        </div>
      </div>
      <div>
        <Searchbox />
      </div>
      <div className="flex gap-5 items-center">
        <ThemeSelection />
        <h1>
          <Link href={"/"} className="flex gap-2 items-center">
            <span className="hidden sm:inline-block text-xl lg:text-4xl font-extrabold bg-violet-500 py-2 px-4 rounded-2xl">
              Moviesstan
            </span>
            <span className="text-2xl hidden lg:inline-block">Database</span>
          </Link>
        </h1>
      </div>
    </nav>
  );
}
