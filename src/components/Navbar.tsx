"use client";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const NAVBAR_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Team",
    href: "/team",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Careers",
    href: "/career",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-24 pt-5 align-center bg-opacity-70 backdrop-blur-md">
      {/* normal navbar for big screens */}
      <header className="hidden sm:flex">
        <MaxWidthWrapper className="md:max-w-[90%] py-2 grid grid-flow-col justify-items-center md:rounded-md md:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
          {/* logo */}
          <div className="flex lg:ml-0 items-center m-auto">
            <Link href="/">
              <Image
                alt="logo"
                src="https://xerocodee-frontend-assets.s3.ap-south-1.amazonaws.com/frontend-web/images/logo.svg"
                width="64"
                height="64"
                className="w-10 h-10 md:w-[64px] md:h-[64px]"
              />
            </Link>
            <h1 className="font-bold pl-[-2]">erocodee</h1>
          </div>

          {/* navbar items */}
          <div className="flex gap-4 flex-row my-auto">
            {NAVBAR_ITEMS.map((item) => (
              <Link className="font-semibold" href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* sign in button */}
          <div className="my-auto">
            <Button
              variant="outline"
              className="border-blue-600 border-2 text-blue-600"
            >
              Sign In
            </Button>
          </div>
        </MaxWidthWrapper>
      </header>

      {/* mobile navbar */}
      <header className=" flex-col sm:hidden">
        <MaxWidthWrapper className="md:max-w-[90%] justify-between px-10 py-2 grid grid-flow-col justify-items-center md:rounded-md md:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
          {/* logo */}
          <div className="flex lg:ml-0 items-center m-auto">
            <Link href="/">
              <Image
                alt="logo"
                src="https://xerocodee-frontend-assets.s3.ap-south-1.amazonaws.com/frontend-web/images/logo.svg"
                width="64"
                height="64"
                className="w-10 h-10 md:w-[64px] md:h-[64px]"
              />
            </Link>
            <h1 className="font-bold pl-[-2]">erocodee</h1>
          </div>

          <Menu
            className="cursor-pointer"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
            }}
          />
        </MaxWidthWrapper>
        {mobileMenuOpen && (
          <div className="sm:hidden w-full flex flex-col gap-y-4 py-10 bg-gray-200 backdrop-blur-lg opacity-90">
            {NAVBAR_ITEMS.map((item) => (
              <Link
                className="font-semibold w-full text-center"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}
