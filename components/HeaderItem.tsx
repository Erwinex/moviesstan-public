"use client";

import { HeaderItemProps } from "@/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function HeaderItem({ lable, param }: HeaderItemProps) {
  const sreachParams = useSearchParams();
  return (
    <h2>
      <Link
        className={`hover:text-blue-400 p-5 rounded-full ${
          sreachParams.get("show") === param
            ? "dark:bg-slate-600 bg-slate-200 "
            : ""
        }`}
        href={"/?show=" + param}
      >
        {lable}
      </Link>
    </h2>
  );
}
