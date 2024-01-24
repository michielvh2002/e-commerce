import axios from "axios";
const myAxios = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Credentials": "true",
  },
  //proxy: false
});
myAxios.defaults.withCredentials = false;
export { myAxios };
