"use client";

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
    <div className="text-center mt-14">
      <h3 className="text-4xl">Something went wrong!</h3>
      <button onClick={reset} className="hover:text-violet-500 mt-5">
        Try again
      </button>
    </div>
  );
}
