<template>
    <div class="product">
        <img :src='img'>
        <h4> {{ label }} </h4>
        <h2> {{ price }} zl</h2>
        <router-link to='/ProductPreview'>
        <Button @button-clicked="showProduct()" label='show'>/</Button>
        </router-link>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import Button from '../components/Button.vue'
import store from '../store/index.ts'

console.log(store.getters.returnLastProduct)

export default defineComponent({
  props: {
    id: Number,
    label: String,
    price: Number,
    img: String
  },
  components: {
    Button
  },
  methods: {
    showProduct () {
      this.$emit('show-product', this.id)
      store.commit('setLastProduct', this)
    }
  }
})
</script>

<style scoped>

.product{
    background: silver;
    border: 2px solid black;
    border-radius: 10px;
    width: 15em;
    height: 20em;
    margin-left: 5em;
}
img {
    width: 10em;
    height: 10em;
    margin-top: 1em;
}

</style>
