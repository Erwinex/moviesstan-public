"use client";

import { HeaderItemProps } from "@/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function HeaderItem({ lable, param }: HeaderItemProps) {
  const sreachParams = useSearchParams();
  return (
    <h2>
      <Link
        className={`hover:text-blue-400 ${
          sreachParams.get("show") === param
            ? "underline underline-offset-8 decoration-8 decoration-blue-400"
            : ""
        }`}
        href={"/?show=" + param}
      >
        {lable}
      </Link>
    </h2>
  );
}
