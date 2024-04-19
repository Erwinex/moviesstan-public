import Image from "next/image";

// This is a uniqe loading efect that display for this root "/search" and "/search/*"
export default function loading() {
  return (
    <div className="flex justify-center items-center mt-20">
      <Image
        src="/searching-spinner.svg"
        alt="The page is loading"
        width={250}
        height={250}
      />
    </div>
  );
}
