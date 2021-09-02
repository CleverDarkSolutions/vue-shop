<template>
    <div class='productPreview'>
        <img :src='product.img'>
      <span>
        <p>Product ID : {{product.id}}</p>
        <p>{{product.label}}</p>
        <div v-for="key in misc" :key='key'>
          <p> {{key}} </p>
        </div>
      </span>
      <div>
      <router-link to='/merch'>
      <Button class='btn btn-primary' @button-clicked='addToCart()' label='Add to cart'></Button>
      </router-link>
      <h3>{{product.price}} zł</h3>
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import store from '../store/index.ts'
import Button from '../components/Button.vue'

const item = store.getters.returnLastProduct

export default defineComponent({
  components: {
    Button
  },
  data () {
    return {
      product: Object,
      misc: Array,
      id: Number
    }
  },
  created () {
    this.product = item
    this.misc = item.misc
    this.id = item.id
  },
  methods: {
    addToCart () {
      store.commit('addToCart', this.id)
      console.log(store.getters.returnCart)
    }
  }

})
</script>

<style scoped>

img {
  width: 30vw;
  height: 50vh;
  float: left;
  margin: 2em;
  border: 2px solid lightcyan;
  border-radius: 1em;
}

span {
  position: absolute;
  top: 25vh;
  left: 40vw;
  font-size: 2vw;
}

h3 {
  position: absolute;
  top: 25vh;
  left: 72%;
  font-size: 6vw;
  border: 5px solid lightcyan;
  padding: 1vw;
  background: white;
}

.productPreview {
  font-size: 2em;
  border: 2px solid lightcyan;
  background: white;
  float: left;
  width: 100%;
}

.btn {
  position: absolute;
  left: 74%;
  top: 50vh;
  font-size: 2vw;
}

</style>
