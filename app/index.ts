import type { ReactNode } from "react";
import { Model } from "./types/model";

import "./types/root-layout-props";
import { Category } from "@/app/types/category";
export type { Model } from "./types/model";
export type { Category } from "@/app/types/category";

export type ModelDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

// Components Types
export type ModelCardProps = {
  model: Model;
};

export type PillProps = {
  children: ReactNode;
  className?: string;
};

export type CategoryPageProps = {
  params: Promise<{
    categoryName: string;
  }>;
};

export type ThreeDModelLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export type ModelNavBarProps = {
  categories: Category[];
};

export type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  isActive:boolean
};
