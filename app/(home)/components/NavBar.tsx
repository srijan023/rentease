import Link from "next/link";
import { RxCaretRight } from "react-icons/rx";
import navbarData from "../../data/navbar.json";
import { playfair_900, lato_400 } from "../../fonts/font";
import Button from "../../components/Button";
import Container from "../../components/Container";

export default function NavBar() {
  return (
    <nav className="text-[var(--primary-black)] fixed z-50 left-1/2 top-0 pt-10 pb-4 transform -translate-x-1/2 bg-[var(--background-white)] w-full">
      <Container classes={"flex justify-between items-center list-none"}>
        <li className={`text-5xl ${playfair_900.className}`}>
          <Link href={"/"}>RentEase</Link>
        </li>
        <ul
          className={`text-xl flex w-1/2 justify-around items-center ${lato_400.className} tracking-wide `}
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
            classes="border-black border-solid border-[1px] hover:bg-[var(--primary-black)] hover:text-white"
            label="Sign Up"
          />
        </li>
      </Container>
    </nav>
  );
}
