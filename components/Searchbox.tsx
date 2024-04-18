"use client";

import { useRouter } from "next/navigation";
import { useRef, useState, type FormEvent } from "react";
import { CiSearch } from "react-icons/ci";

export default function Searchbox() {
  const router = useRouter();
  function submitHandeler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchValue = formData.get("search");
    if (!searchValue) return;
    router.push("/search/" + searchValue);
  }
  console.log("render");
  return (
    <div className=" ">
      <form
        className="flex items-center justify-center gap-3"
        onSubmit={submitHandeler}
      >
        <div className="search-box appearance-none h-14 w-28 sm:w-40 xl:w-80 rounded-full bg-violet-300 dark:bg-violet-700 sm:text-2xl">
          <input
            className="text-black dark:text-white"
            type="text"
            placeholder="Search"
            name="search"
          />
        </div>

        <button
          type="submit"
          className="my-auto text-gray-900 bg-[inherit] border border-gray-300 focus:outline-none hover:bg-violet-300 focus:ring-4 focus:ring-gray-400 font-medium rounded-full px-5 py-2.5 me-2 dark:bg-[inherit] dark:text-white dark:border-gray-600 dark:hover:bg-violet-500 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          <CiSearch className="inline-block md:hidden" />
          <span className="hidden md:inline-block">Search</span>
        </button>
      </form>
    </div>
  );
}
