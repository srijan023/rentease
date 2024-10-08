import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { abril, poppins_300 } from "@fonts/font";
import signin from "@assests/signin.svg";

interface SignInModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export default function SignInModal({ show, setShow }: SignInModalProps) {
  if (!show) return null;
  return (
    <div className="w-screen h-screen fixed inset-0 flex items-center justify-center z-[55] backdrop-filter backdrop-blur-sm bg-gray-300 bg-opacity-70">
      <div className="bg-white rounded-2xl">
        <div className="flex">
          <div className="w-3/5 bg-[#fff8f7] rounded-l-2xl">
            <h2 style={abril.style} className="font-bold text-5xl text-center">
              RentEase
            </h2>
            <span
              className="m-auto text-center block max-w-xs text-md"
              style={poppins_300.style}
            >
              All your rental needs in one place and securely maintained
            </span>
            <div className="flex justify-center">
              <Image
                src={signin}
                alt="sign in illustration"
                priority
                width={400}
              ></Image>
            </div>
          </div>
          <form className="w-2/5 space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
