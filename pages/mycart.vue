<script setup lang="ts">
const store = useShoppingBasket();
</script>

<template>
  <h1>My shopping cart</h1>
  <div class="cartContainer" v-if="store.basket.length > 0">
    <ul>
      <li v-for="(item, index) in store.basket" :key="index">
        <ItemViewCard :item="item" />
      </li>
    </ul>
    <div class="overview">
      <h2>Overview</h2>
      <div class="costContainer">
        <div class="costs">
          <p>Total items ({{ store.basket.length }})</p>
          <p class="priceOverview">
            €{{ store.basket.reduce((sum, cur) => sum + cur.price, 0) }}
          </p>
        </div>
        <div class="costs">
          <p>Shipping costs</p>
          <p class="priceOverview">€0,00</p>
        </div>
      </div>
      <div class="costs">
        <p>Total amount</p>
        <p>€{{ store.basket.reduce((sum, cur) => sum + cur.price, 0) }}</p>
      </div>
      <button>Pay</button>
    </div>
  </div>
  <div class="overviewEmpty" v-else>
    <img src="~/assets/turtwig.svg" alt="een pokemon genaamd turtwig" />
    <strong>Your shopping cart is empty</strong>
  </div>
</template>

<style lang="scss" scoped>
.overview {
  width: 20rem;
  h2 {
    text-align: right;
  }
}
.costContainer {
  border-bottom: 1px solid black;
  width: 100%;
}
.costs {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.priceOverview {
  font-weight: bold;
}

.cartContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
}
button {
  width: 100%;
  padding: 0.8rem 0;
  background-color: #d20097;
  font-weight: bold;
  border-radius: 0.5rem;
  border: none;
  box-shadow: 0 0px 8px 0px rgba(0, 0, 0, 0.2);
  color: #fefefefe;
}

.overviewEmpty {
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
