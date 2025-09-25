import ModelsGrid from "@/app/components/ModelGrid";
import { CategoryPageProps } from "@/app/index";
import { getAllModels } from "@/app/lib/model";

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { categoryName } = await params;

  const modelsFilteredByCategoryList = await getAllModels(categoryName);

  return (
    <ModelsGrid title="CategoryModels" models={modelsFilteredByCategoryList} />
  );
};

export default CategoryPage;
