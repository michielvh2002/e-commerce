<script setup lang="ts">
const firstname = ref<string>("");
const lastname = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const repeatPass = ref<string>("");
const username = ref<string>("");

const store = useAuthStore();

const generalError = ref<string | null>(null);

const register = () => {
  //register logic
  if (
    username.value === "" ||
    firstname.value === "" ||
    lastname.value === "" ||
    email.value === "" ||
    password.value === "" ||
    repeatPass.value === "" ||
    password.value !== repeatPass.value
  ) {
    generalError.value = "Fill the fields correct in";
    return;
  }
  try {
    store.register(
      username.value,
      firstname.value,
      lastname.value,
      password.value,
      email.value
    );
  } catch (error: any) {
    generalError.value = error.message;
  }
};
</script>

<template>
  <div class="loginContainer">
    <img src="~/assets/LoginPic.png" alt="" />
    <form action="POST" @submit.prevent="register">
      <div>
        <label for="username">Username</label>
        <input
          id="username"
          type="text"
          v-model="username"
          placeholder="username"
        />
      </div>
      <div>
        <label for="firstname">Firstname</label>
        <input
          id="firstname"
          type="text"
          v-model="firstname"
          placeholder="Firstname"
        />
      </div>
      <div>
        <label for="lastname">Lastname</label>
        <input
          id="lastname"
          type="text"
          v-model="lastname"
          placeholder="Lastname"
        />
      </div>
      <div>
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email" placeholder="Email" />
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
      <div>
        <label for="repeatPass">Repeat password</label>
        <input
          id="repeatPassword"
          type="password"
          v-model="repeatPass"
          placeholder="Repeat password"
        />
      </div>
      <button type="submit">Create my account</button>
      <p v-if="generalError">{{ generalError }}</p>
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
    cursor: pointer;
  }
}
</style>
