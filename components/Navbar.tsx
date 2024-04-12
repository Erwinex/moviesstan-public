import { AiFillHome } from "react-icons/ai";
import MenuItem from "./MenuItem";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-1 px-2 max-w-7xl mx-auto">
      <div className="flex gap-5">
        <MenuItem lable="Home page" address="/" Icon={AiFillHome} />
        <MenuItem
          lable="About us"
          address="/about"
          Icon={BsFillInfoCircleFill}
        />
      </div>
      <Link href={"/"} className="flex gap-2 items-center">
        <span className="text-4xl font-extrabold bg-violet-500 py-2 px-4 rounded-2xl">
          Moviestan
        </span>
        <span className="text-2xl hidden sm:inline-block">Database</span>
      </Link>
    </nav>
  );
}
