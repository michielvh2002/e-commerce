<script setup lang="ts">
import type { ItemSchema } from "~/types/ItemSchema";

const props = defineProps<{ item: ItemSchema }>();
</script>

<template>
  <div class="itemcontainer">
    <strong>{{ item.name }}</strong>
    <div>
      <p class="price">{{ item.price }}</p>
      <p>This item is in stock</p>
      <p>
        Sold by this shop: <span>{{ item.shopId }}</span>
      </p>
    </div>
    <img :src="item.images[0]" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.itemcontainer {
  display: grid;
  grid-template-areas:
    "img title"
    "img divje";

  div {
    grid-area: divje;
  }
  strong {
    grid-area: title;
  }
  img {
    grid-area: img;
  }
}
</style>
