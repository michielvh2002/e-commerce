import { defineStore } from "pinia";
import type { ItemSchema } from "~/types/ItemSchema";

export const useShoppingBasket = defineStore(
  "shoppingbasket",
  () => {
    const basket = ref<Array<ItemSchema>>([]);

    const addItem = (item: ItemSchema) => {
      basket.value.push(item);
    };

    const removeItem = (item: ItemSchema) => {
      const index = basket.value.findIndex((it) => it.shopId === item.shopId);
      if (index === -1) throw Error("No item found in basket");
      basket.value.splice(index, 1);
    };
    return {
      basket,
      addItem,
      removeItem,
    };
  },
  {
    persist: {
      storage: sessionStorage,
    },
  }
);
