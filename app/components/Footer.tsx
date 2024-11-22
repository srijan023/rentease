import Link from "next/link";
import { FaRegCopyright } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import contactData from "@data/contact";

export default function Footer() {
  return (
    <div className="h-max bg-secondary-10 text-white">
      <div className="w-9/12 mx-auto">
        <h2 className=" font-header text-5xl max-w-2xl mx-auto pt-14 text-center">
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
        <div className="font-body pb-8 flex items-center justify-center gap-2 text-xs tracking-wider">
          <FaRegCopyright />
          <span>Made by Srijan Gyawali & Abhinaya Aryal</span>
          <FaCode />
        </div>
      </div>
    </div>
  );
}
