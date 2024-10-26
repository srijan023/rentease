import Container from "@components/Container";
import RentEase from "@components/RentEase";
import Avatar from "@components/Avatar";
import Link from "next/link";

import { BsBell } from "react-icons/bs";
import { RxEnvelopeClosed } from "react-icons/rx";

import avatar from "@assests/avatar.jpg";

export default function NavBar() {
  return (
    <header className="text-white fixed z-50 left-0 top-0 py-6 bg-secondary-10 w-full shadow-[0px_2px_10px_4px_rgba(0,0,0,0.3)]">
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
          <Avatar classes="border-2 border-white" image={avatar} />
        </div>
      </Container>
    </header>
  );
}
