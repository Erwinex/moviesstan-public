"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: unknown;
  reset(): any;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="flex flex-col items-center mt-14 pb-10">
      <Image
        className="mx-auto motion-safe:animate-bounce"
        src="/broken-film.svg"
        alt="broken icon"
        width={200}
        height={250}
      />
      <h3 className="text-4xl">Something went wrong!</h3>
      <button onClick={reset} className="hover:text-violet-500 mt-5">
        Try again
      </button>
    </div>
  );
}
