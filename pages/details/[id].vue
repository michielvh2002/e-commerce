<script setup lang="ts">
import { myAxios } from "~/instances/myAxios";
import type { ItemSchema } from "~/types/ItemSchema";

const route = useRoute();
const item = ref<ItemSchema | null>(null);
const store = useShoppingBasket();

if (route.params.id) {
  //get data from db
  //let item: ItemSchema =
}

const addToCart = async () => {
  //add item to cart
  if (item.value) store.addItem(item.value);
};
</script>

<template>
  <div>
    <div>
      <h1>{{ item?.name }}</h1>
      <p>
        Category: <span class="blueWhite">{{ item?.category }}</span>
      </p>
    </div>
    <div>
      <div>
        <img :src="item?.images[0]" :alt="item?.description" />
        <ul>
          <li v-for="(image, index) in item?.images" :key="index">
            <img :src="image" alt="" />
          </li>
        </ul>
        <h2>Product description</h2>
        <p>{{ item?.description }}</p>
      </div>
      <div>
        <p class="price">{{ item?.price }}</p>
        <p>
          sold by this shop: <span class="blueWhite">{{ item?.shopId }}</span>
        </p>
        <div class="addContainer">
          <button @click="addToCart" class="blueWhite">
            <img src="~/assets/cart-white.svg" alt="shopping cart" />
            Add to shopping cart
          </button>
          <button class="favorites">
            <img src="~/assets/favorite-white.svg" alt="heart icon" /> Add to
            favorites
          </button>
        </div>
        <div>
          <p>Other items by this seller</p>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blueWhite,
.favorites {
  color: #fefefefe;
  font-weight: bold;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  align-items: center;
  display: flex;
  column-gap: 0.5rem;
}
.favorites {
  background-color: #00c008;
}
.blueWhite {
  background-color: #0400d2;
}
.addContainer {
  display: flex;
}
</style>
