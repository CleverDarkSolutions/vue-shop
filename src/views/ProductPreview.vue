<template>
    <div>
        {{product.id}}
        {{product.label}}
        <img :src='product.img'>
        <Button @button-clicked='addToCart()' label='Dodaj do koszyka'></Button>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import store from '../store/index.ts'
import Button from '../components/Button.vue'

const item = store.getters.returnLastProduct
console.log(item)

export default defineComponent({
  components: {
    Button
  },
  data () {
    return {
      product: Object
    }
  },
  created () {
    this.product = item
  },
  methods: {
    addToCart () {
      store.commit('addToCart', item)
      console.log(store.getters.returnCart)
    }
  }

})
</script>
