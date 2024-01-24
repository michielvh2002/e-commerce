<script setup lang="ts">
import type { ItemProps } from "~/types/ItemProps";
const props = defineProps<{
  item: ItemProps;
  submitted: boolean;
  index: number;
  title: string;
}>();
defineEmits(["remove"]);

const nameError = computed(() => {
  if (props.submitted) {
    return props.item.name === "" ? "Fill in a name for your item" : null;
  }
  return null;
});
const descriptionError = computed(() => {
  if (props.submitted) {
    return props.item.description === ""
      ? "Fill in a description for your item"
      : null;
  }
  return null;
});

const categoryError = computed(() => {
  if (props.submitted) {
  }
  return null;
});
const skuError = computed(() => {
  if (props.submitted) {
    return props.item.SKU === 0 ? "You have got to have at least 1 sku" : null;
  }
  return null;
});
const priceError = computed(() => {
  if (props.submitted) {
    return props.item.price < 0 ? "Your price can not be negative" : null;
  }
  return null;
});
const imgError = computed(() => {
  if (props.submitted) {
    return props.item.images.length === 0 ? "upload at least one image" : null;
  }
  return null;
});
</script>

<template>
  <div class="cardcontainer">
    <div class="cardHeading">
      <h2>{{ title }}</h2>
      <button @click="$emit('remove')">
        <img src="~/assets/trashcan.svg" />
      </button>
    </div>
    <div>
      <InputWithLabel
        label="Item name"
        v-model="item.name"
        type="text"
        :id="'itemName' + index"
        :autofocus="true"
        aria-required="true"
        autocomplete="off"
        :aria-describedby="'err1' + index"
        :aria-invalid="nameError !== null"
        placeholder="Shop name"
        :required="true"
      />
      <span :id="'err1' + index" class="error" v-if="nameError !== null">{{
        nameError
      }}</span>
    </div>
    <div>
      <InputWithLabel
        label="Description"
        v-model="item.description"
        type="text"
        :id="'description' + index"
        :autofocus="true"
        aria-required="true"
        autocomplete="off"
        :aria-describedby="'err2' + index"
        :aria-invalid="descriptionError !== null"
        placeholder="Write something about your item"
        :required="true"
      />
      <span
        :id="'err2' + index"
        class="error"
        v-if="descriptionError !== null"
        >{{ descriptionError }}</span
      >
    </div>
    <div>
      <InputWithLabel
        label="Price"
        v-model="item.price"
        type="number"
        :id="'sku' + index"
        :autofocus="true"
        aria-required="true"
        autocomplete="off"
        :aria-describedby="'err6' + index"
        :aria-invalid="priceError !== null"
        :required="true"
      />
      <span :id="'err6' + index" class="error" v-if="priceError !== null">{{
        priceError
      }}</span>
    </div>
    <div>
      <InputWithLabel
        label="Category"
        v-model="item.category"
        type="text"
        :id="'description' + index"
        :autofocus="true"
        aria-required="true"
        autocomplete="off"
        :aria-invalid="categoryError !== null"
        :required="true"
      />
    </div>
    <div>
      <InputWithLabel
        label="SKU"
        v-model="item.SKU"
        type="number"
        :id="'sku' + index"
        :autofocus="true"
        aria-required="true"
        autocomplete="off"
        :aria-describedby="'err3' + index"
        :aria-invalid="skuError !== null"
        :required="true"
      />
      <span :id="'err3' + index" class="error" v-if="skuError !== null">{{
        skuError
      }}</span>
    </div>
    <div>
      <InputWithLabel
        label="Add images (min. 1)"
        v-model="item.images"
        :id="'image' + index"
        :autofocus="true"
        aria-required="true"
        autocomplete="off"
        :aria-describedby="'err4' + index"
        :aria-invalid="imgError !== null"
        :required="true"
        accept="image/jpeg, image/png, image/jpg"
        type="file"
      />
      <span :id="'err4' + index" class="error" v-if="imgError !== null">{{
        imgError
      }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$error: #b00020;
.cardcontainer {
  display: grid;
  max-width: 30rem;
  min-width: 25rem;
  box-shadow: 0 0px 8px 0px rgba(0, 0, 0, 0.2);
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  row-gap: 1rem;
  padding: 1rem;
  div:not(:first-child) {
    row-gap: 1rem;
    display: grid;
  }
}

button {
  background-color: inherit;
  cursor: pointer;
  border: none;
}

.error {
  color: $error;
}

.cardHeading {
  display: flex;
  justify-content: space-between;
}
</style>
