import axios from "axios";

// const baseURL = "http://localhost:5000";

export const getAPI = async (url) => {
  const response = await axios.get(`/api/${url}`);
  return response;
};
