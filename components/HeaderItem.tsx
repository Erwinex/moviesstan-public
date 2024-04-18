"use client";

import { HeaderItemProps } from "@/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function HeaderItem({ lable, param }: HeaderItemProps) {
  const sreachParams = useSearchParams();
  const show = sreachParams.get("show");
  return (
    <h2 className="group">
      <Link
        className={`hover:text-blue-400 p-5 rounded-full ${
          show === param ||
          (sreachParams.get("show") === null && param === "fetchTrending")
            ? "dark:bg-slate-600 bg-slate-200 "
            : "group-hover:motion-safe:animate-pulse"
        }`}
        href={"/?show=" + param}
      >
        {lable}
      </Link>
    </h2>
  );
}
