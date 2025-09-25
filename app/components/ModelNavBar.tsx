"use client";

import { usePathname } from "next/navigation";
import { ModelNavBarProps } from "..";
import NavLink from "@/app/components/NavLink";

const ModelCardNavBar = ({ categories }: ModelNavBarProps) => {
  const pathName = usePathname();
  return (
    <nav className="py-6 px-4 md:px-0 h-full">
      <ul className="flex overflow-x-auto md:flex-col gap-2 md:gap-3 md:h-full md:space-y-2 scrollbar-hide">
        {/* <li>
          <Link
            href="/3d-models"
            className="block px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors whitespace-nowrap"
          >
            All
          </Link>
        </li> */}
        <NavLink href="/3d-models" isActive={pathName === "/3d-models"}>
          All
        </NavLink>
        {categories.map((item) => {
          const routeLink = `/3d-models/categories/${item.slug}`;
          return (
            <NavLink
              href={routeLink}
              key={item.slug}
              isActive={pathName === routeLink}
            >
              {item.displayName}
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default ModelCardNavBar;
