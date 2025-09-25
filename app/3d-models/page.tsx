import { getAllModels } from "../lib/model";
import ModelsGrid from "../components/ModelGrid";
import Form from "next/form";

const ThreeDModels = async ({
  searchParams,
}: {
  searchParams: { query: string };
}) => {
  const { query } = searchParams;
  console.log("SearchQuery---->", query);
  const threeDModeldata = await getAllModels();
  const filteredThreeDModels = query
    ? threeDModeldata.filter((threeDModel) =>
        threeDModel.name.toLowerCase().includes(query.toLowerCase())
      )
    : threeDModeldata;
  return (
    <>
      <Form action="/3d-models" className="w-full px-5 md:px-0 md:max-w-xl">
        <input
          type="text"
          name="query"
          placeholder="E.g. dragon"
          autoComplete="off"
          defaultValue={query}
          className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
        />
      </Form>
      <ModelsGrid title="3D Models" models={filteredThreeDModels} />
    </>
  );
};

export default ThreeDModels;
