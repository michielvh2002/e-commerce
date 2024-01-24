<script setup lang="ts">
import * as IBAN_VALIDATOR from "iban-ts";

const submitted = ref<boolean>(false);

const name = ref<string>("");
const address = ref<string>("");
const addrPublic = ref<boolean>(false);
const description = ref<string>("");
const pfp = ref<any>(null);
const banner = ref<any>(null);
const iban = ref<string>("");

const nameError = computed(() => {
  if (submitted.value) {
    return name.value === "" ? "Fill in a name for your shop" : null;
  }
  return null;
});

const addressError = computed(() => {
  if (submitted.value) {
    return address.value === "" ? "Fill in the address for your shop" : null;
  }
  return null;
});

const descriptionError = computed(() => {
  if (submitted.value) {
    return description.value === ""
      ? "Fill in a description for your store"
      : null;
  }
  return null;
});

const pfpError = computed(() => {
  if (submitted.value) {
    return pfp.value === null ? "Upload a profile picture" : null;
  }
  return null;
});

const bannerError = computed(() => {
  if (submitted.value) {
    return banner.value === null ? "Upload a profile picture" : null;
  }
  return null;
});

const ibanError = computed(() => {
  if (submitted.value) {
    if (iban.value === "") return "Fill in your IBAN";
    return !IBAN_VALIDATOR.isValid(iban.value)
      ? "The provided IBAN is not valid"
      : null;
  }
  return null;
});

const createShop = () => {
  submitted.value = true;
  if (
    nameError.value !== null ||
    addressError.value !== null ||
    descriptionError.value !== null ||
    pfpError.value !== null ||
    bannerError.value !== null ||
    ibanError.value !== null
  )
    return;
};
</script>

<template>
  <form action="" method="post" @submit.prevent="createShop" novalidate>
    <h1>Create your shop here</h1>
    <div>
      <InputWithLabel
        label="Shop name"
        v-model="name"
        type="text"
        id="shopName"
        :autofocus="true"
        aria-required="true"
        autocomplete="off"
        aria-describedby="err1"
        :aria-invalid="nameError !== null"
        placeholder="Shop name"
        :required="true"
      />
      <span id="err1" class="error" v-if="nameError !== null">{{
        nameError
      }}</span>
    </div>
    <div>
      <InputWithLabel
        label="Address"
        v-model="address"
        type="text"
        id="address"
        :autofocus="false"
        aria-required="true"
        autocomplete="off"
        aria-describedby="err2"
        :aria-invalid="addressError !== null"
        placeholder="Ghentsreet 1, 9000 Ghent"
        :required="true"
      />
      <span id="err2" class="error" v-if="addressError !== null">{{
        addressError
      }}</span>
    </div>
    <div>
      <InputWithLabel
        label="Make my address public"
        v-model="addrPublic"
        type="checkbox"
        id="addressPublic"
        :autofocus="false"
        autocomplete="off"
        :required="true"
      />
    </div>
    <div>
      <div>
        <label for="description"
          >Description<span class="required">*</span></label
        >
        <textarea
          name="description"
          id="description"
          v-model="description"
          cols="30"
          rows="10"
          placeholder="Write something about your store"
          aria-required="true"
          autocomplete="off"
          aria-describedby="err3"
          :aria-invalid="descriptionError !== null"
        ></textarea>
      </div>
      <span id="err3" class="error" v-if="descriptionError !== null">{{
        descriptionError
      }}</span>
    </div>
    <div>
      <InputWithLabel
        label="Profile picture"
        v-model="pfp"
        type="file"
        id="pfp"
        :autofocus="false"
        aria-required="true"
        autocomplete="off"
        aria-describedby="err4"
        :aria-invalid="pfpError !== null"
        accept="image/jpeg, image/png, image/jpg"
        :required="true"
      />
      <span id="err4" class="error" v-if="pfpError !== null">{{
        pfpError
      }}</span>
    </div>
    <div>
      <InputWithLabel
        label="Banner image"
        v-model="banner"
        type="file"
        id="banner"
        :autofocus="false"
        aria-required="true"
        autocomplete="off"
        aria-describedby="err5"
        :aria-invalid="bannerError !== null"
        accept="image/jpeg, image/png, image/jpg"
        :required="true"
      />
      <span id="err5" class="error" v-if="bannerError !== null">{{
        bannerError
      }}</span>
    </div>
    <div>
      <InputWithLabel
        label="IBAN"
        v-model="iban"
        type="text"
        id="iban"
        :autofocus="false"
        aria-required="true"
        autocomplete="off"
        aria-describedby="err6"
        :aria-invalid="ibanError !== null"
        placeholder="BEXX XXXX XXXX XXXX"
        :required="true"
      />
      <span id="err6" class="error" v-if="ibanError !== null">{{
        ibanError
      }}</span>
    </div>
    <button type="submit">Create my shop!</button>
  </form>
</template>

<style lang="scss" scoped>
form {
  display: grid;
  row-gap: 2rem;
  div {
    display: grid;
    row-gap: 0.5rem;
  }
  height: 100%;
  padding-bottom: 5rem;
  max-width: 60rem;
  margin: 0 auto;
}
button {
  background-color: #0400d2;
  color: #fefefe;
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  font-weight: bold;
  cursor: pointer;
}
.error {
  color: #b00020;
}
textarea {
  box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
}
textarea:focus {
  border: none;
  outline: none;
}
.required {
  color: #d20000;
}
</style>
