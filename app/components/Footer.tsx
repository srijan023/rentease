import Link from "next/link";
import Container from "@components/Container";
import { FaRegCopyright } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import contactData from "@data/contact";
import { abril, poppins_300 } from "@fonts/font";

export default function Footer() {
  return (
    <div className="h-max bg-[var(--primary-black)] text-white">
      <Container>
        <h2
          className="text-5xl max-w-2xl mx-auto pt-14 text-center"
          style={abril.style}
        >
          Get in touch with me for more information
        </h2>
        <p className="mx-auto block w-max mt-12">
          If you need any help or have question, I am happy to assist you.
        </p>
        <div className="flex items-center justify-between tracking-wider my-28">
          {contactData.map((item, index) => {
            return (
              <Link
                key={index}
                target="_blank"
                href={item.url}
                className="flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <item.icon className="text-3xl" />
                <span>{item.text}</span>
              </Link>
            );
          })}
        </div>
        <div
          className="pb-8 flex items-center justify-center gap-2 text-xs tracking-wider"
          style={poppins_300.style}
        >
          <FaRegCopyright />
          <span>Made by Srijan Gyawali & Abhinaya Aryal</span>
          <FaCode />
        </div>
      </Container>
    </div>
  );
}
