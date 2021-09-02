<template>
    <div>
      <div v-for="key in items" :key="key">
          <h1>{{key.id}}</h1>
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import store from '../store/index.ts'

export default defineComponent({
  data () {
    return {
      items: Array
    }
  },
  created () {
    this.items = store.getters.returnCart
  },
  beforeUpdate () {
    this.items = store.getters.returnCart
    console.log('Update cart')
    console.log(this.items)
  }
})
</script>
