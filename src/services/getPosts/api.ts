import axios from 'axios';
import { ApiObject, Post } from '../../types/Post';

export const fetchPosts = async (): Promise<Post[]> => {
  const url = process.env.REACT_APP_POSTS_API;
  if (!url) {
    throw new Error('Posts API endpoint is not defined in the environment variables.');
  }

  try {
    const response = await axios.get<Post[]>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch posts: ${error}`);
  }
};

export const fetchObjects = async (): Promise<ApiObject[]> => {
  const url = process.env.REACT_APP_OBJECTS_API;
  if (!url) {
    throw new Error('Objects API endpoint is not defined in the environment variables.');
  }

  try {
    const response = await axios.get<ApiObject[]>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch objects: ${error}`);
  }
};

export const createObject = async (newObject: ApiObject): Promise<ApiObject> => {
  const url = process.env.REACT_APP_OBJECTS_API;
  if (!url) {
    throw new Error('Objects API endpoint is not defined in the environment variables.');
  }

  try {
    const response = await axios.post<ApiObject>(url, newObject);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to create object: ${error}`);
  }
};
