import { describe, it, expect, vi, beforeEach } from "vitest";
import axiosInstance from "./axiosInstance";
import { fetchObjects, createObject, deleteObject, updateObject } from "../api/objectsApi";
import { ApiObject } from "../../types/Post";

vi.mock("./axiosInstance");

describe("API Functions", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("fetchObjects", () => {
    it("should fetch objects successfully", async () => {
      const mockData: ApiObject[] = [
        { id: "1", name: "Object 1", data: null, createdAt: "" },
        { id: "2", name: "Object 2", data: null, createdAt: "" },
      ];

      vi.mocked(axiosInstance.get).mockResolvedValue({ data: mockData });

      const result = await fetchObjects();
      expect(result).toEqual(mockData);
      expect(axiosInstance.get).toHaveBeenCalledWith("/");
    });

    it("should throw an error if fetching fails", async () => {
      const errorMessage = "Network Error";
      vi.mocked(axiosInstance.get).mockRejectedValue(errorMessage);

      await expect(fetchObjects()).rejects.toThrow(`Failed to fetch objects: ${errorMessage}`);
    });
  });

  describe("createObject", () => {
    it("should create a new object successfully", async () => {
      const newObject: ApiObject = { id: "3", name: "New Object", data: null, createdAt: "" };
      const mockResponse: ApiObject = { id: "3", name: "New Object", data: null, createdAt: "" };

      vi.mocked(axiosInstance.post).mockResolvedValue({ data: mockResponse });

      const result = await createObject(newObject);
      expect(result).toEqual(mockResponse);
      expect(axiosInstance.post).toHaveBeenCalledWith("/", newObject);
    });

    it("should throw an error if creation fails", async () => {
      const errorMessage = "Creation Failed";
      vi.mocked(axiosInstance.post).mockRejectedValue(errorMessage);

      await expect(
        createObject({ id: "4", name: "Failing Object", data: null, createdAt: "" })
      ).rejects.toThrow(`Failed to create object: ${errorMessage}`);
    });
  });

  describe("deleteObject", () => {
    it("should delete an object successfully", async () => {
      const id = "1";

      vi.mocked(axiosInstance.delete).mockResolvedValue(undefined);

      await deleteObject(id);
      expect(axiosInstance.delete).toHaveBeenCalledWith(`/${id}`);
    });

    it("should throw an error if deletion fails", async () => {
      const id = "2";
      const errorMessage = "Deletion Failed";

      vi.mocked(axiosInstance.delete).mockRejectedValue(errorMessage);

      await expect(deleteObject(id)).rejects.toThrow(`Failed to delete object: ${errorMessage}`);
    });
  });

  describe("updateObject", () => {
    it("should update an object successfully", async () => {
      const id = "1";
      const updatedData: Partial<ApiObject> = { name: "Updated Object" };
      const mockResponse: ApiObject = { id: "1", name: "Updated Object", data: null, createdAt: "" };

      vi.mocked(axiosInstance.put).mockResolvedValue({ data: mockResponse });

      const result = await updateObject(id, updatedData);
      expect(result).toEqual(mockResponse);
      expect(axiosInstance.put).toHaveBeenCalledWith(`/${id}`, updatedData);
    });

    it("should throw an error if update fails", async () => {
      const id = "2";
      const updatedData: Partial<ApiObject> = { name: "Failing Update" };
      const errorMessage = "Update Failed";

      vi.mocked(axiosInstance.put).mockRejectedValue(errorMessage);

      await expect(updateObject(id, updatedData)).rejects.toThrow(`Failed to update object: ${errorMessage}`);
    });
  });
});
