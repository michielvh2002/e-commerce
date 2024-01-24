import type { AxiosResponse } from "axios";
import { myAxios } from "~/instances/myAxios";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<{
    _id: string;
    token: string;
    username: string;
  }>();

  const login = async (
    username: string,
    password: string
  ): Promise<AxiosResponse<any, any>> => {
    const res = await myAxios.post("/signin", {
      username: username,
      password: password,
    });
    if (res.status === 200) {
      user.value = res.data;

      localStorage.setItem("token", res.data.token);
    }
    return res;
  };

  return {
    user,
    login,
  };
});
