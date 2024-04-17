"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export default function Searchbox() {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  function submitHandeler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/search/" + searchValue);
  }
  return (
    <div className="flex items-center justify-center gap-5">
      <form
        className="search-box appearance-none h-14 w-40 xl:w-96 rounded-full bg-violet-300 dark:bg-violet-700"
        onSubmit={submitHandeler}
      >
        <input
          className="text-black dark:text-white"
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setSearchValue(e.currentTarget.value);
          }}
        />
      </form>

      <button
        type="submit"
        disabled={searchValue === ""}
        className="my-auto disabled:bg-slate-400 disabled:text-gray-200 dark:disabled:bg-slate-400 dark:disabled:text-gray-200 disabled:cursor-not-allowed text-gray-900 bg-[inherit] border border-gray-300 focus:outline-none hover:bg-violet-100 focus:ring-4 focus:ring-gray-400 font-medium rounded-full text-md px-5 py-2.5 me-2 dark:bg-[inherit] dark:text-white dark:border-gray-600 dark:hover:bg-violet-500 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Search
      </button>
    </div>
  );
}
