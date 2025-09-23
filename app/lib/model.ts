import modelsData from "../data/models.json";
import { Model } from "@/app/index";

export async function getAllModels(): Promise<Model[]> {
  // This is where you'd write code to fetch the list
  // of models from a database. We're mocking that with
  // our JSON array of data in models.json for now.
  return modelsData;
}

export function getModelById(id: string | number): Model {
  const foundModel = modelsData.find(
    (model) => model.id.toString() === id.toString()
  );
  if (!foundModel) {
    throw new Error(`Model with id ${id} is not found`);
  }
  return foundModel;
}
