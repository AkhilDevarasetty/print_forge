import { CategoryPageProps } from "@/app/index";
import { getCategoryBySlug } from "@/app/lib/categories";

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { categoryName } = await params;

  const categoryObj = getCategoryBySlug(categoryName);

  return <h1>{categoryObj.displayName}</h1>;
};

export default CategoryPage;
