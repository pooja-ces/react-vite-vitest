import { describe, it, expect, beforeEach, vi } from 'vitest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchPosts, fetchObjects } from './api';
import { Post, ApiObject } from '../../types/Post';

const mock = new MockAdapter(axios);

describe('API Fetch Functions', () => {
  beforeEach(() => {
    mock.reset();
  });

  describe('fetchPosts', () => {
    it('should fetch posts successfully', async () => {
      const mockPosts: Post[] = [
        { id: 1, title: 'Post 1', body: 'Content of Post 1', userId: 1 },
        { id: 2, title: 'Post 2', body: 'Content of Post 2', userId: 2 },
      ];

      const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
      vi.stubEnv('REACT_APP_POSTS_API', apiUrl);

      mock.onGet(apiUrl).reply(200, mockPosts);

      const result = await fetchPosts();
      expect(result).toEqual(mockPosts);
      expect(result).toHaveLength(2);
    });

    it('should throw an error if API URL is not defined', async () => {
      vi.stubEnv('REACT_APP_POSTS_API', undefined);

      await expect(fetchPosts()).rejects.toThrow(
        'Posts API endpoint is not defined in the environment variables.'
      );
    });

    it('should throw an error on API failure', async () => {
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
      vi.stubEnv('REACT_APP_POSTS_API', apiUrl);

      mock.onGet(apiUrl).reply(500);

      await expect(fetchPosts()).rejects.toThrow('Failed to fetch posts: Error: Request failed with status code 500');
    });
  });

  describe('fetchObjects', () => {
    it('should fetch objects successfully', async () => {
      const mockObjects: ApiObject[] = [
        { id: '1', name: 'Object 1', data: {}, createdAt: '2023-01-01' },
        { id: '2', name: 'Object 2', data: {}, createdAt: '2023-01-02' },
      ];

      const apiUrl = 'https://api.restful-api.dev/objects';
      vi.stubEnv('REACT_APP_OBJECTS_API', apiUrl);

      mock.onGet(apiUrl).reply(200, mockObjects);

      const result = await fetchObjects();
      expect(result).toEqual(mockObjects);
      expect(result).toHaveLength(2);
    });

    it('should throw an error if API URL is not defined', async () => {
      vi.stubEnv('REACT_APP_OBJECTS_API', undefined);

      await expect(fetchObjects()).rejects.toThrow(
        'Objects API endpoint is not defined in the environment variables.'
      );
    });

    it('should throw an error on API failure', async () => {
      const apiUrl = 'https://api.restful-api.dev/objects';
      vi.stubEnv('REACT_APP_OBJECTS_API', apiUrl);

      mock.onGet(apiUrl).reply(500);

      await expect(fetchObjects()).rejects.toThrow('Failed to fetch objects: Error: Request failed with status code 500');
    });
  });
});
