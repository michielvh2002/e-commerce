<script setup lang="ts">
const searchValue = useState<string>("searchValue", () => "");

const search = () => {
  console.log("yo");
};
</script>

<template>
  <header>
    <div class="headerMainContent">
      <div>
        <img src="" alt="" />
        <p>logo</p>
      </div>
      <form id="searchbar" action="" @submit.prevent="search">
        <div class="inputfield">
          <label for="searchInput">search</label>
          <input
            name="searchInput"
            id="searchInput"
            type="text"
            placeholder="Search an item / shop"
            :value="searchValue"
          />
        </div>
        <button class="searchButton" type="submit">
          <span>Search item or shop</span>
          <img src="~/assets/search.png" alt="magnifying glass" />
        </button>
      </form>
      <ul>
        <li>
          <NuxtLink to="/createShop" class="headerLink" id="blueLink"
            >Create a shop</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/dashboard" class="headerLink" id="pinkLink"
            >My dashboard</NuxtLink
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 90vw;
  margin: 1rem auto;
  display: flex;
}
.headerMainContent {
  display: grid;
  grid-template-columns: 4rem 1fr 16rem;
  column-gap: 2rem;
  width: 100%;
  align-items: center;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .headerLink {
      box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.25);
      border-radius: 0.5rem;
      padding: 0.6rem 0.6rem;
      color: #fefefefe;
      font-weight: bold;
    }
    #blueLink {
      background-color: #0400d2;
    }
    #pinkLink {
      background-color: #d20097;
    }
  }
}
#searchbar {
  display: grid;
  grid-template-columns: 2rem 1fr;
  grid-template-areas: "btn inputfield";
  box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 0.8rem;
  border-radius: 0.5rem;
  overflow: hidden;
  .searchButton {
    height: fit-content;
    background-color: inherit;
    cursor: pointer;
    span {
      display: block;
      text-indent: -99999px;
      position: absolute;
    }
    grid-area: btn;
  }

  .inputfield {
    display: flex;
    flex-direction: row;
    grid-area: inputfield;
    label {
      text-indent: -9999px;
      position: absolute;
    }
  }
  input {
    height: 100%;
    width: 100%;
  }
  input:focus {
    border: none;
    outline: none;
  }
}
</style>
