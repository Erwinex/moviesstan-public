import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center items-center mt-20">
      <Image
        src="/loading-spinner.svg"
        alt="The page is loading"
        width={250}
        height={250}
      />
    </div>
  );
}
