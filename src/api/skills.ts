import axios from "axios";

const API_URL = "http://localhost:8000/api/skills/";

export const getSkills = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};
