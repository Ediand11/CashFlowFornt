import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3010" || process.env.BACK,
});
