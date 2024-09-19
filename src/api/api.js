import axios from 'axios';

const API_URL = 'https://your-api-url.com/api';

export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/auth/login`, credentials);
  return response.data;
};

export const signupUser = async (data) => {
  const response = await axios.post(`${API_URL}/auth/signup`, data);
  return response.data;
};

export const getEvents = async () => {
  const response = await axios.get(`${API_URL}/events`);
  return response.data;
};

export const createEvent = async (eventData, token) => {
  const response = await axios.post(`${API_URL}/events`, eventData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
