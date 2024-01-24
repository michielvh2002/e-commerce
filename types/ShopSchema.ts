import type { ShopStatus } from "~/enums/ShopStatus";

export type ShopSchema = {
  owner: string;
  name: string;
  address: string;
  public: boolean;
  description: string;
  profile_picture: any;
  banner_image: any;
};
