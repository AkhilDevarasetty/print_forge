"use client";

import NavLink from "@/app/components/NavLink";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathName = usePathname();
  
  return (
    <header className="w-full bg-white fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
      <nav className="flex justify-between px-6 py-4">
        <div className="relative cursor-pointer">
          <a href="/">
            {/* Desktop Logo */}
            <Image
              src="/printforge-logo.svg"
              alt="PrintForge Logo"
              width={200}
              height={50}
              className="w-[200px] h-auto hidden md:block"
            />
            {/* Mobile Logo */}
            <Image
              src="/printforge-logo-icon.svg"
              alt="PrintForge Logo"
              width={40}
              height={40}
              className="w-[40px] h-auto block md:hidden"
            />
          </a>
        </div>
        <ul className="flex items-center gap-2.5">
          <NavLink href="/3d-models" isActive={pathName.includes("/3d-models")}>
            3D Models
          </NavLink>
          <NavLink href="/about" isActive={pathName === "/about"}>
            About
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
