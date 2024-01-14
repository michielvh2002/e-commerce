<script setup lang="ts">
const email = useState<string>("email", () => "");
const password = useState<string>("password", () => "");

const login = () => {
  //login logica
};
</script>

<template>
  <div class="loginContainer">
    <img src="~/assets/LoginPic.png" alt="" />
    <form action="POST" @submit.prevent="login">
      <div>
        <label for="email">Email</label>
        <input id="email" type="email" :value="email" placeholder="Email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          :value="password"
          placeholder="Password"
        />
      </div>
      <button type="submit">Login</button>
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
