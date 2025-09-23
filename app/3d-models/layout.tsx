"use client";
import { ThreeDModelLayoutProps } from "@/app/index";
import { getAllCategories } from "../lib/categories";
import ModelCardNavBar from "@/app/components/ModelNavBar";
import { usePathname } from "next/navigation";
const ThreeDModelsLayout = ({ children }: ThreeDModelLayoutProps) => {
  const categoriesList = getAllCategories();
  const pathInfo = usePathname();
  // Improved layout: sidebar with shadow, sticky, and main content with background
  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <aside className="z-20 w-full md:w-64 md:h-screen md:fixed md:top-20 md:left-0 bg-white border-b md:border-b-0 md:border-r border-gray-200 shadow-sm">
        <ModelCardNavBar categories={categoriesList} />
      </aside>
      <main className="flex-1 p-4 md:ml-64 max-w-5xl mx-auto w-full transition-all">
        {children}
      </main>
    </div>
  );
};
export default ThreeDModelsLayout;
