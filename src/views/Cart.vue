<template>
    <div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Image</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
    <tbody v-for="array in cart" :key="array">
    <tr v-for="key in array" :key="key">
      <th scope="row">{{key.id}}</th>
      <td>{{key.label}}</td>
      <td>{{key.price}}</td>
      <td><img :src='key.img'></td>
      <td><Button @click="deleteItem(key.id)" label="X"></Button></td>
    </tr>
  </tbody>
</table>
    <Button @click="checkout()" v-if="items.length > 1" class='btn btn-success' label='Checkout'></Button>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import store from '../store/index.ts'
import Button from '../components/Button.vue'

const products = store.getters.returnProducts

export default defineComponent({
  components: {
    Button
  },
  data () {
    return {
      items: Array,
      allProducts: Array,
      cart: []
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
      const help = this.allProducts.filter((item) => item.id === this.items[i])
      console.log(help)
      this.cart.push(help)
      i++
    }
    console.log(this.cart)
  },
  methods: {
    deleteItem (index) {
      let i = 0
      let help
      while (true) {
        // console.log(i)
        help = this.cart[i].filter((item) => item.id === index)
        // console.log(help)
        if (help.length > 0) {
          break
        }
        i++
      }
      const finalIndex = help[0].id
      console.log(finalIndex)
      console.log(i)
      console.log(this.cart)

      this.cart.splice(i, 1)
      store.commit('removeFromCart', i)
    },
    checkout () {
      console.log('checkout')
      store.commit('clearCart')
      this.cart = []
      this.items = []
    }
  }
})
</script>

<style scoped>
img {
    width: 10vw;
    height: 10vh;
}

table {
    width: 80%;
    margin: auto;
}
</style>
