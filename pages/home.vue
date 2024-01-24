<script setup lang="ts">
import type { ShopSchema } from "~/types/ShopSchema";

const shops = ref<Array<ShopSchema>>([]);
(async () => {
  const store = useShopStore();

  try {
    const res = await store.getShops();
    console.log(res.data.data);
    shops.value = res.data.data;
  } catch (error) {}
})();
</script>

<template>
  <div>
    <h1>Home</h1>

    <h2>shops</h2>
    <ul>
      <li v-for="(shop, index) in shops">
        <h3>{{ shop.name }}</h3>
        <img src="~/assets/placeholder.jpg" alt="placeholder" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 90%;
  margin: 0 auto;
}
img {
  max-width: 20rem;
}
</style>
