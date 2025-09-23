import { getAllModels } from "../lib/model";
import ModelCard from "@/app/components/ModelCard";
import { Model } from "@/app/types/model";

const ThreeDModels = async () => {
  const threeDModeldata = await getAllModels();
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">All Models</h1>
      <div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        role="region"
        aria-label="3D Models Gallery"
      >
        {threeDModeldata.map((model: Model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </div>
  );
};

export default ThreeDModels;
