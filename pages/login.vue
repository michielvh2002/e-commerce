<script setup lang="ts">
const email = useState<string>("email", () => "");
const password = useState<string>("password", () => "");

const login = () => {
  //login logica
};
</script>

<template>
  <div>
    <form action="POST" @submit.prevent="login">
      <div>
        <label for="email">Email</label>
        <input id="email" type="email" :value="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input id="password" type="password" :value="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
