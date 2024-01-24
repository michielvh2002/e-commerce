<script setup lang="ts">
import type { ItemProps } from "~/types/ItemProps";
import { Category } from "~/enums/Category";

const items = ref<Array<ItemProps>>([
  {
    name: "",
    description: "",
    category: Category.Clothing,
    SKU: 1,
    price: 0,
    images: [],
  },
]);

const submitted = ref<boolean>(false);

const addItem = () => {
  const item = {
    name: "",
    description: "",
    category: Category.Clothing,
    SKU: 1,
    price: 0,
    images: [],
  };
  items.value.push(item);
};
const createItems = async () => {
  submitted.value = true;
  for (let index = items.value.length - 1; index >= 0; index--) {
    const element = items.value[index];

    if (
      element.name !== "" &&
      element.description !== "" &&
      element.SKU !== 0 &&
      element.category &&
      element.images.length !== 0 &&
      element.price >= 0
    ) {
      //send request to backend
      const store = useShopStore();
      const res = await store.createItem({
        shopId: "",
        name: element.name,
        description: element.description,
        price: element.price,
        category: element.category,
        sku: element.SKU,
        images: element.images,
      });

      if (res.status === 201) {
        items.value.splice(index, 1);
      }
    }
  }
};

const removeItem = (num: number) => {
  items.value.splice(num, 1);
};
</script>

<template>
  <form action="" method="post" @submit.prevent="createItems">
    <div class="createItemHeading">
      <h1>Create items for your shop</h1>
      <button id="addItemBtn" @click="addItem">+ Add item</button>
    </div>
    <ul>
      <li v-for="(item, index) in items">
        <ItemCard
          @remove="() => removeItem(index)"
          :title="'Item' + (index + 1)"
          :item="items[index]"
          :submitted="submitted"
          :index="index"
        />
      </li>
    </ul>
    <button class="createBtn" type="submit">Create my shop!</button>
  </form>
</template>

<style lang="scss" scoped>
#addItemBtn {
  background-color: #0400d2;
  color: #fefefefe;
  font-weight: bold;
  border-radius: 8px;
  padding: 0.3rem 0.5rem;
  height: fit-content;
}
.createItemHeading {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
form {
  width: 95%;
  margin: 0 auto;
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 2rem;
    row-gap: 2rem;
    margin-bottom: 2rem;
  }
}

button {
  cursor: pointer;
}
.createBtn {
  background-color: #0400d2;
  color: #fefefe;
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
}
</style>
