import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import signin from "@assests/signin.svg";
import Button from "@components/Button";
import { abril, poppins_400 } from "@fonts/font";
import { useState } from "react";

interface SignInModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export default function SignInModal({ show, setShow }: SignInModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const backdropRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!show) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target as Node)
      ) {
        setShow(false);
        setEmail("");
        setPassword("");
        setError("");
      }
    };

    const backdropElement = backdropRef.current;

    backdropElement?.addEventListener("click", handleOutsideClick);

    return () => {
      backdropElement?.removeEventListener("click", handleOutsideClick);
    };
  }, [show, setShow]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error);

      // TODO: Push another route instead of alert and Proper error handling and error display in ui
      alert("Login Successful!");
      setShow(false);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
        console.log(err);
      } else {
        setError("An unexpected error occurred.");
        console.log("Unexpected error: ", err);
      }
    }
  };

  if (!show) return null;

  return (
    <div
      ref={backdropRef}
      className="w-screen h-screen fixed inset-0 flex items-center justify-center z-[55] backdrop-filter backdrop-blur-sm bg-gray-300 bg-opacity-70"
    >
      <div ref={modalContentRef} className="bg-white rounded-2xl">
        <div className="flex">
          <div className="bg-[#fff8f7] rounded-l-2xl p-8">
            <h2 style={abril.style} className="font-bold text-5xl text-center">
              RentEase
            </h2>
            <span
              className="mx-auto mt-4 text-center block max-w-xs text-sm text-gray-700"
              style={poppins_400.style}
            >
              All your rental needs in one place and securely maintained
            </span>
            <div className="flex justify-center px-8">
              <Image
                src={signin}
                alt="sign in illustration"
                priority
                width={420}
              ></Image>
            </div>
          </div>
          <form className="space-y-4 flex items-center" onSubmit={handleSubmit}>
            <div className="px-16">
              <h2
                className="font-bold text-4xl text-center mb-4"
                style={abril.style}
              >
                Welcome Back
              </h2>
              <span
                className="mx-auto text-center block text-gray-700 text-sm"
                style={poppins_400.style}
              >
                Lets pick up where you left off!
              </span>
              <div className="my-8">
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-full"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-1 font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-full"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <span className="max-w-xs block">{error}</span>}
              <Button
                label="Sign In"
                type="submit"
                classes="bg-black text-white mx-auto block mt-12 mb-6"
              />
              <span className="mx-auto text-center block text-lg">
                Do not have an account?&nbsp;
                <Link href="/signup" className="text-blue-500">
                  Sign Up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
