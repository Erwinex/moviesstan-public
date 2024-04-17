import { type MenuItemProp } from "@/types";
import Link from "next/link";

export default function MenuItem({ lable, address, variant }: MenuItemProp) {
  return (
    <Link href={address} className={"hover:text-violet-500 " + variant}>
      <p className="uppercase text-lg">{lable}</p>
    </Link>
  );
}
