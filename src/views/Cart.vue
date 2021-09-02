<template>
    <div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nazwa</th>
      <th scope="col">Cena</th>
      <th scope="col">Zdjecie</th>
    </tr>
  </thead>
    <tbody v-for="key in items" :key="key">
    <tr v-if="key>0">
      <th scope="row">{{key}}</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import store from '../store/index.ts'

const products = store.getters.returnProducts

export default defineComponent({
  data () {
    return {
      items: Array,
      allProducts: Array,
      cart: Array
    }
  },
  created () {
    this.items = store.getters.returnCart
    this.allProducts = products
    this.cart = []
    console.log(this.items)
    console.log(this.allProducts)
    let i = 0
    while (i < this.items.length) {
      const help = this.allProducts.filter((item) => item.id === i)
      this.cart.push(help)
      i++
    }
    console.log(this.cart)
  }
})
</script>
