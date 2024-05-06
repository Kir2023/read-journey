import axios from "axios";

const BASE_URL = "https://readjourney.b.goit.study/api";

export const instance = axios.create({
  baseURL: BASE_URL,
});
