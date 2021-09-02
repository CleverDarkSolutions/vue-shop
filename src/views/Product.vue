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
    img: String,
    misc: Array
  },
  components: {
    Button
  },
  methods: {
    showProduct () {
      store.commit('setLastProduct', this)
      console.log(store.getters.returnLastProduct)
    }
  }
})
</script>

<style scoped>

.product{
    color: dimgrey;
    background: #FFFAF0;
    border: 2px solid antiquewhite;
    border-radius: 10px;
    width: 15em;
    height: 20em;
    margin-left: 5em;
    margin-top: 2em;
    float: left;
}
img {
    width: 10em;
    height: 10em;
    margin-top: 1em;
}

button {
  border: 2px solid antiquewhite;
  background: #FFFACD;
  width: 5em;
  height: 2em;
  color: dimgrey;
}

</style>
