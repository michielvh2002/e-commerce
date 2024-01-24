import type { Category } from "~/enums/Category";
import type { ItemStatus } from "~/enums/ItemStatus";

export type ItemSchema = {
  shopId: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  sku: number;
  images: string[];
  status: ItemStatus;
  created_at: Date;
  updated_at: Date;
};
