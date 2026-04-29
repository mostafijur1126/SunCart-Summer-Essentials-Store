"use client";
import { Link, Button } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
const NavbarSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-4 sm:px-6 md:px-8">
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={50}
            className="w-auto h-auto max-w-[80px] sm:max-w-[100px]"
          ></Image>
        </div>
        <ul className="hidden md:flex items-center gap-2 sm:gap-3 md:gap-4">
          <li>
            <Link href="#" className="text-sm sm:text-base">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm sm:text-base">
              Products
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm sm:text-base">
              My Profile
            </Link>
          </li>
        </ul>
        <div className="hidden md:block">
          <Button
            variant="outline"
            className="text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2"
          >
            Login / Register
          </Button>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-current transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </header>
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-lg border-b border-separator transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6">
          <li>
            <Link
              href="#"
              className="text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              My Profile
            </Link>
          </li>
          <li className="pt-2">
            <Button
              variant="outline"
              className="text-sm px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Login / Register
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarSection;
