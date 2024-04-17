import { type MenuItemProp } from "@/types";
import Link from "next/link";

export default function MenuItem({ lable, address, Icon }: MenuItemProp) {
  return (
    <Link href={address} className="hover:text-violet-500">
      <Icon className="inline-block md:hidden text-4xl" />
      <p className="uppercase hidden md:inline-block text-lg">{lable}</p>
    </Link>
  );
}
