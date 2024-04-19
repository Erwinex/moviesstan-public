"use client";

import Image from "next/image";
import { useState } from "react";
import MenuItem from "./MenuItem";

// This is a hamburge menu show on meduim devices
export default function HamburgerMenu() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className={
        showMenu
          ? "w-2/4 h-full fixed top-0 left-0 max-h-full pt-4 bg-violet-100 dark:bg-slate-800 pl-2  space-y-4 z-50"
          : undefined
      }
    >
      <div className="flex flex-col gap-8">
        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="block cursor-pointer md:hidden float-left clear-both"
          onClick={() => setShowMenu(!showMenu)}
        />

        {showMenu && (
          <div className="flex flex-col gap-4">
            <MenuItem lable="Home page" address="/" variant="block md:hidden" />
            <MenuItem
              lable="About us"
              address="/about"
              variant="block md:hidden"
            />
          </div>
        )}
      </div>
    </div>
  );
}
