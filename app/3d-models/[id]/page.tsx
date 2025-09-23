import { getModelById } from "@/app/lib/model";

interface ModelDetailsPageProps {
  params: {
    id: string;
  };
}

const ModelDetailsPage = async ({ params }: ModelDetailsPageProps) => {
  const { id } = await params;
  console.log("ID--->", id);
  const model = getModelById(id);

  return (
    <>
      <h1>Welcome To Model Page</h1>
      <p>{model.name}</p>
    </>
  );
};

export default ModelDetailsPage;
