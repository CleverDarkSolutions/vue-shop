<template>
    <div>
        <form @submit='onSubmit'>
            <div class='form-control'>
              <label>Name</label>
              <input type='text' v-model='name' name='name' placeholder='Add name'/>
            </div>
            <div class='form-control'>
              <label>Price</label>
              <input type='number' v-model='price' name='price' placeholder='Add price'/>
            </div>
            <div class='form-control'>
              <label>Image</label>
              <input type='text' v-model='image' name='image' placeholder='Add path to the image'/>
            </div>
            <div class='form-control'>
              <label>Specs</label>
              <input type='text' v-model='info1' name='info1'/>
              <input type='text' v-model='info2' name='info2'/>
            </div>
            <input type='submit' value='Save product' class='btn btn-block'/>
        </form>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import store from '../store/index.ts'

export default defineComponent({
  data () {
    return {
      name: '',
      price: 0,
      image: '',
      info1: '',
      info2: ''
    }
  },
  methods: {
    onSubmit (e) {
      if (this.name !== '' && this.price > 0 && this.image !== '') {
        e.preventDefault()
        const newProduct = {
          id: Math.floor(Math.random() * 1000),
          label: this.name,
          price: this.price,
          img: this.image,
          misc: [this.info1, this.info2]
        }
        store.commit('addNewProduct', newProduct)
        this.name = ''
        this.price = 0
        this.image = ''
        this.info1 = ''
        this.info2 = ''
      } else {
        alert('Fill in properly')
      }
    }
  }
})
</script>

<style scoped>
form {
    width: 50%;
    margin: auto;
}

div {
    padding: 30px;
}

input {
    margin-right: 15px;
    margin-left: 15px;
}
</style>
