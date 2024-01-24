import type { AxiosResponse } from "axios";
import { myAxios } from "~/instances/myAxios";
import type { ShopSchema } from "~/types/ShopSchema";

export const useShopStore = defineStore("shop", () => {
  const createShop = async (
    shop: ShopSchema
  ): Promise<AxiosResponse<any, any>> => {
    const res = await myAxios.post("/createShop", { shop });
    return res;
  };

  return {
    createShop,
  };
});
