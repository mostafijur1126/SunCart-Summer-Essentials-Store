"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Avatar } from "@heroui/react";

const NavbarSection = () => {
  const { data, isPending } = authClient.useSession();
  const userData = data?.user;
  // console.log(isPending);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handelLogout = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
          router.refresh();
        },
      },
    });
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-[#E2DCD1] bg-[#FFF9F0]/80 backdrop-blur-lg">
      <header className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 md:px-8">
        <Link href="/">
          <div className="relative w-[120px] h-[60px]">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              priority
              sizes="120px"
              className="object-contain"
            />
          </div>
        </Link>
        <ul className="hidden md:flex items-center gap-2 sm:gap-3 md:gap-6">
          <li>
            <Link
              href="/"
              className={`text-sm sm:text-base font-medium transition-colors duration-200 ${
                pathname === "/"
                  ? "text-[#FF9B82] border-b-2 border-[#FFB7A4]"
                  : "text-[#2C3E3E] hover:text-[#FFB7A4]"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className={`text-sm sm:text-base font-medium transition-colors duration-200 ${
                pathname === "/products"
                  ? "text-[#FF9B82] border-b-2 border-[#FFB7A4]"
                  : "text-[#2C3E3E] hover:text-[#FFB7A4]"
              }`}
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              href="/my-profile"
              className={`text-sm sm:text-base font-medium transition-colors duration-200 ${
                pathname === "/my-profile"
                  ? "text-[#FF9B82] border-b-2 border-[#FFB7A4]"
                  : "text-[#2C3E3E] hover:text-[#FFB7A4]"
              }`}
            >
              My Profile
            </Link>
          </li>
        </ul>
        <div className="hidden md:block space-x-2">
          {isPending ? (
            <div className="h-9 w-32 rounded-full bg-gray-200 animate-pulse" />
          ) : userData ? (
            <div className="flex gap-2">
              <Avatar>
                <Avatar.Image
                  alt={userData?.name}
                  src={userData?.image || undefined}
                />
                <Avatar.Fallback>{userData?.name}</Avatar.Fallback>
              </Avatar>
              <Link
                href="#"
                className="rounded-full border-2 border-[#FFB7A4] bg-transparent text-[#FFB7A4] font-semibold px-6 py-2 hover:bg-[#FFB7A4] hover:text-[#2C3E3E] transition-all duration-300"
                onClick={handelLogout}
              >
                Logout
              </Link>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-full border-2 border-[#FFB7A4] bg-transparent text-[#FFB7A4] font-semibold px-6 py-2 hover:bg-[#FFB7A4] hover:text-[#2C3E3E] transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-full border-2 border-[#FFB7A4] bg-transparent text-[#FFB7A4] font-semibold px-6 py-2 hover:bg-[#FFB7A4] hover:text-[#2C3E3E] transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </>
          )}
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`w-6 h-0.5 bg-[#2C3E3E] transition-all duration-300 rounded-full ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[#2C3E3E] transition-all duration-300 rounded-full ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[#2C3E3E] transition-all duration-300 rounded-full ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </header>
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-[#FFF9F0]/95 backdrop-blur-lg border-b border-[#E2DCD1] transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 py-6">
          <li>
            <Link
              href="/"
              className={`text-base font-medium transition-colors duration-200 ${
                pathname === "/"
                  ? "text-[#FF9B82]"
                  : "text-[#2C3E3E] hover:text-[#FFB7A4]"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className={`text-base font-medium transition-colors duration-200 ${
                pathname === "/products"
                  ? "text-[#FF9B82]"
                  : "text-[#2C3E3E] hover:text-[#FFB7A4]"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/my-profile"
              className={`text-base font-medium transition-colors duration-200 ${
                pathname === "/my-profile"
                  ? "text-[#FF9B82]"
                  : "text-[#2C3E3E] hover:text-[#FFB7A4]"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              My Profile
            </Link>
          </li>
          {isPending ? (
            <div className="text-[#FF9B82]">Loading...</div>
          ) : userData ? (
            <div className="flex gap-2">
              <Avatar>
                <Avatar.Image
                  alt={userData?.name}
                  src={userData?.image || undefined}
                />
                <Avatar.Fallback>{userData?.name}</Avatar.Fallback>
              </Avatar>
              <Link
                href="#"
                className="rounded-full border-2 border-[#FFB7A4] bg-transparent text-[#FFB7A4] font-semibold px-6 py-2 hover:bg-[#FFB7A4] hover:text-[#2C3E3E] transition-all duration-300"
                onClick={handelLogout}
              >
                Logout
              </Link>
            </div>
          ) : (
            <li className="pt-2 space-x-1">
              <Link
                href="/login"
                variant="bordered"
                className="rounded-full border-2 border-[#FFB7A4] bg-transparent text-[#FFB7A4] font-semibold px-6 py-2 hover:bg-[#FFB7A4] hover:text-[#2C3E3E] transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                variant="bordered"
                className="rounded-full border-2 border-[#FFB7A4] bg-transparent text-[#FFB7A4] font-semibold px-6 py-2 hover:bg-[#FFB7A4] hover:text-[#2C3E3E] transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarSection;
