import { Link, Button } from "@heroui/react";
import Image from "next/image";
const NavbarSection = () => {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={100} height={50}></Image>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">My Profile</Link>
          </li>
        </ul>
        <div>
          <Button variant="outline">Login / Register</Button>
        </div>
      </header>
    </nav>
  );
};

export default NavbarSection;
