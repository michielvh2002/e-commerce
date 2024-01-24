import type { AxiosResponse } from "axios";
import { myAxios } from "~/instances/myAxios";

export const useAuthStore = defineStore(
  "auth",
  () => {
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

    const register = async (
      username: string,
      firstname: string,
      lastname: string,
      password: string,
      email: string
    ): Promise<AxiosResponse<any, any>> => {
      const res = await myAxios.post("/signup", {
        username: username,
        first_name: firstname,
        last_name: lastname,
        email: email,
        password: password,
      });
      console.log(res);
      return res;
    };

    return {
      user,
      login,
      register,
    };
  },
  {
    persist: {
      storage: persistedState.sessionStorage,
    },
  }
);
