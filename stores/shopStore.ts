import type { AxiosResponse } from "axios";
import { myAxios } from "~/instances/myAxios";
import type { ItemSchema } from "~/types/ItemSchema";
import type { ShopSchema } from "~/types/ShopSchema";

export const useShopStore = defineStore("shop", () => {
  const createShop = async (
    shop: ShopSchema
  ): Promise<AxiosResponse<any, any>> => {
    console.log("hello");
    const res = await myAxios.post("/shop", { shop });
    return res;
  };

  const createItem = async (
    item: ItemSchema
  ): Promise<AxiosResponse<any, any>> => {
    const res = await myAxios.post("/item", { item });
    return res;
  };

  const getShops = async (): Promise<AxiosResponse<any, any>> => {
    return myAxios.get("/shops");
  };

  return {
    createShop,
    createItem,
    getShops,
  };
});
