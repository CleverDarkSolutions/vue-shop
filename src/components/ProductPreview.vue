<template>
    <div>
        {{product.id}}
        {{product.label}}
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import store from '../store/index.ts'

const items = store.getters.returnLastProduct
console.log(items)

export default defineComponent({
  data () {
    return {
      product: Object
    }
  },
  created () {
    this.product = items
  }

})
</script>
