import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center items-center mt-20">
      <img
        className="h-60 w-60"
        src="loading-spinner.svg"
        alt="The page is loading"
      />
    </div>
  );
}
