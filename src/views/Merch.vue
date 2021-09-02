<template>
  <div>
    <div v-for="product in products" :key="product">
      <Product
        :id="product.id"
        :label="product.label"
        :price="product.price"
        :img="product.img"
        :misc="product.misc"
      ></Product>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Product from './Product.vue'
import store from '../store/index.ts'

const products = store.getters.returnProducts

export default defineComponent({
  components: {
    Product
  },
  data () {
    return {
      products: [{}]
    }
  },
  created () {
    this.products = products
  }
})
</script>
