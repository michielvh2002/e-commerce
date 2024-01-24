import type { Category } from "~/enums/Category";

export type ItemProps = {
  name: string;
  description: string;
  category: Category;
  SKU: number;
  price: number;
  images: Array<any>;
};
