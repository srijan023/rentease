import { playfair_800 } from "../fonts/font";
import contactData from "../data/contact";
import Link from "next/link";
import { FaRegCopyright } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import Container from "./Container";

export default function Footer() {
  return (
    <div className="h-max bg-[var(--primary-black)] text-white">
      <h2
        className="text-5xl max-w-2xl mx-auto pt-14 text-center"
        style={playfair_800.style}
      >
        Get in touch with me for more information
      </h2>
      <p className="mx-auto block w-max my-8">
        If you need any help or have question, I am happy to assist you.
      </p>
      <Container classes="flex items-center justify-between tracking-wider my-16">
        {contactData.map((item, index) => {
          return (
            <Link
              key={index}
              target="_blank"
              href={item.url}
              className="flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <item.icon className="text-3xl" /> <span>{item.text}</span>
            </Link>
          );
        })}
      </Container>
      <Container classes="pb-8 flex items-center justify-center gap-2 text-xs tracking-wider">
        <FaRegCopyright />
        <span>Made by Srijan Gyawali & Abhinaya Aryal</span>
        <FaCode />
      </Container>
    </div>
  );
}
