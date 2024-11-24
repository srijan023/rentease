import Container from "@components/Container";
import RentEase from "@components/RentEase";
import Avatar from "@components/Avatar";
import Link from "next/link";

{
  // import { BsBell } from "react-icons/bs";
  // import { RxEnvelopeClosed } from "react-icons/rx";
}

import avatar from "@assests/avatar.jpg";

export default function NavBar() {
  return (
    <header className="text-primary-10 z-50 left-0 top-0 py-6 bg-background w-full border-b-2 border-secondary-30">
      <Container
        classes={" max-w-[1200px] mx-auto flex justify-between items-center"}
      >
        <Link href={"/"}>
          <RentEase />
        </Link>
        <div className="flex items-center space-x-16">
          {
            // <div className="relative">
            //   <BsBell className="text-4xl" />
            //   <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-customRed-50" />
            // </div>
            // <div className="relative">
            //   <RxEnvelopeClosed className="text-4xl" />
            //   <span className="absolute top-0 -right-1 h-3 w-3 rounded-full bg-customRed-50" />
            // </div>
          }
          <Avatar classes="border-2 border-white" image={avatar} />
        </div>
      </Container>
    </header>
  );
}
