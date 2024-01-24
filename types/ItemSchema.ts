import type { Category } from "~/enums/Category";

export type ItemSchema = {
  shopId: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  sku: number;
  images: any[];
};
