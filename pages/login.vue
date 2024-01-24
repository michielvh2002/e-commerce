<script setup lang="ts">
const store = useAuthStore();

const username = ref<string>("");
const password = ref<string>("");

const generalError = ref<string | null>(null);

const login = async () => {
  //login logica
  if (username.value === "" || password.value === "") return;

  try {
    const res = await store.login(username.value, password.value);
    if (res.status === 200) {
      await navigateTo({ name: "home" });
    }
  } catch (error: any) {
    generalError.value = error.message;
  }
};
</script>

<template>
  <div class="loginContainer">
    <img src="~/assets/LoginPic.png" alt="" />
    <form action="" method="post" @submit.prevent="login" novalidate>
      <div>
        <label for="email">Email</label>
        <input id="email" type="text" v-model="username" placeholder="Email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          v-model="password"
          placeholder="Password"
        />
      </div>
      <button type="submit">Login</button>
      <span class="error" v-if="generalError">{{ generalError }}</span>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.loginContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}
form {
  display: grid;
  row-gap: 1rem;
  max-width: 20rem;
  min-width: 15rem;
  margin: 0 auto;
  div {
    display: grid;
    row-gap: 1rem;
    input {
      box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.25);
      border: none;
      padding: 0.5rem;
      border-radius: 0.5rem;
    }
  }
  button {
    background-color: #0400d2;
    color: #fefefe;
    border-radius: 0.5rem;
    padding: 0.5rem 0;
    font-weight: bold;
  }
}
</style>
