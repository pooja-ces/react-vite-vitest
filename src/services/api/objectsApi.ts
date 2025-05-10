import axiosInstance from "./axiosInstance";
import { ApiObject } from "../../types/Post";

export const fetchObjects = async (): Promise<ApiObject[]> => {
  try {
    const response = await axiosInstance.get<ApiObject[]>("/");
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch objects: ${error}`);
  }
};

export const createObject = async (newObject: ApiObject): Promise<ApiObject> => {
  try {
    const response = await axiosInstance.post<ApiObject>("/", newObject);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to create object: ${error}`);
  }
};

export const deleteObject = async (id: string): Promise<void> => {
  try {
    await axiosInstance.delete(`/${id}`);
    console.log(`Object with ID ${id} deleted successfully.`);
  } catch (error) {
    throw new Error(`Failed to delete object: ${error}`);
  }
};

export const updateObject = async (
  id: string,
  updatedData: Partial<ApiObject>
): Promise<ApiObject> => {
  try {
    const response = await axiosInstance.put<ApiObject>(`/${id}`, updatedData);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to update object: ${error}`);
  }
};
