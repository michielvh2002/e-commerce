<script setup lang="ts">
import { myAxios } from "~/instances/myAxios";
import type { ItemSchema } from "~/types/ItemSchema";

const route = useRoute();
const item = ref<ItemSchema | null>(null);

if (route.params.id) {
  //get data from db
  //let item: ItemSchema =
}

const addToCart = async () => {
  //add item to cart
};
</script>

<template>
  <div>
    <div>
      <h1>{{ item?.name }}</h1>
      <p>
        Category: <span class="blueWhite">{{ item?.category }}</span>
      </p>
      <h2>Product description</h2>
      <p>{{ item?.description }}</p>
    </div>
    <div>
      <div>
        <img :src="item?.images[0]" :alt="item?.description" />
        <div>
          <ul>
            <li v-for="(image, index) in item?.images" :key="index">
              <img :src="image" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p class="price">{{ item?.price }}</p>
        <p>
          sold by this shop: <span class="blueWhite">{{ item?.shopId }}</span>
        </p>
        <div>
          <button @click="addToCart" class="blueWhite">
            Add to shopping cart
          </button>
          <button class="favorites">Add to favorites</button>
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

<style lang="scss" scoped></style>
