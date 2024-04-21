// api.js

import axios from 'axios';

const baseURL = 'http://your-api-base-url.com'; // Replace this with your actual API base URL

export const createCache = async (value, expiration) => {
  try {
    const response = await axios.post(`${baseURL}/cache`, { value, expiration });
    return response.data;
  } catch (error) {
    console.error('Error creating cache:', error);
    throw error;
  }
};

export const getCacheState = async () => {
  try {
    const response = await axios.get(`${baseURL}/cache/state`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cache state:', error);
    throw error;
  }
};

export const getCache = async (key) => {
  try {
    const response = await axios.get(`${baseURL}/cache/${key}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cache:', error);
    throw error;
  }
};

export const deleteCache = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/cache/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting cache:', error);
    throw error;
  }
};
