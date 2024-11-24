"use client";

import { useState } from "react";
import Link from "next/link";
import { RxCaretRight } from "react-icons/rx";
import navbarData from "@data/navbar.json";
import Button from "@components/Button";
import Container from "@components/Container";
import SignInModal from "@components/SignInModal";
import RentEase from "@/app/components/RentEase";

export default function NavBar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className="text-secondary-10 fixed z-50 left-1/2 top-0 pt-10 pb-4 transform -translate-x-1/2 bg-white w-full">
        <Container
          classes={
            "max-w-[1200px] mx-auto flex justify-between items-center list-none bg-white"
          }
        >
          <Link href={"/"}>
            <RentEase />
          </Link>
          <ul
            className={`text-xl flex w-1/2 justify-around items-center tracking-wide `}
          >
            {navbarData.navbar.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    href={item.url}
                    className="flex items-center hover:text-black hover:scale-105 transition-transform"
                  >
                    {item.title} <RxCaretRight className="text-2xl" />
                  </Link>
                </li>
              );
            })}
          </ul>
          <li>
            <Button
              classes="text-xl border-black border-solid border-[1px] hover:bg-secondary-10 hover:text-white"
              label="Sign In"
              onClick={() => setShowModal(true)}
            />
          </li>
        </Container>
      </header>

      <SignInModal show={showModal} setShow={setShowModal} />
    </>
  );
}
