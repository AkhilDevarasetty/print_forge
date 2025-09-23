import { NavLinkProps } from "@/app/index";
import Link from "next/link";

const NavLink = ({ href, children, isActive }: NavLinkProps) => {
  return (
    <li className="text-sm uppercase">
      <Link
        href={href}
        className={`px-4 py-2 transition-colors rounded-md cursor-pointer ${
          isActive
            ? "text-[#F77D36]"
            : "text-gray-700 hover:text-[#F77D36]"
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
