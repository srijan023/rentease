import Container from "@components/Container";
import RentEase from "@components/RentEase";
import Link from "next/link";
import Image from "next/image";

import { BsBell } from "react-icons/bs";
import { RxEnvelopeClosed } from "react-icons/rx";

import avatar from "@assests/avatar.jpg";

export default function NavBar() {
  return (
    <header className="text-secondary-10 fixed z-50 left-0 top-0 py-6 bg-white w-full border-b-2 border-secondary-20">
      <Container classes={"flex justify-between items-center"}>
        <Link href={"/"}>
          <RentEase />
        </Link>
        <div className="flex items-center space-x-16">
          <div className="relative">
            <BsBell className="text-4xl" />
            <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-customRed-50" />
          </div>
          <div className="relative">
            <RxEnvelopeClosed className="text-4xl" />
            <span className="absolute top-0 -right-1 h-3 w-3 rounded-full bg-customRed-50" />
          </div>
          <div className="h-14 w-14 relative rounded-full overflow-hidden bg-orange-500">
            <Image
              src={avatar}
              alt="User Avatar"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
