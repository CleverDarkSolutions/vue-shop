<template>
    <div>
        <ProductPreview></ProductPreview>
        <Product @show-product="displayProduct()" id=1 img='https://i5.walmartimages.com/asr/e02e2d52-5ade-4236-b24a-e9c88faadf46.8d82c070488397fe72d864004a9bac8b.png' label="Koks sluchawki" price=200></Product>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import Product from './Product.vue'
import ProductPreview from '../components/ProductPreview.vue'

export default defineComponent({
  components: {
    Product,
    ProductPreview
  },
  methods: {
    displayProduct () {
      console.log('chuuuj')
    }
  }
})
</script>
