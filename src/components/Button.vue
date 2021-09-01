<template>
    <button @click="onClick()"> {{label}} </button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: String
  },
  methods: {
    onClick () {
      this.$emit('button-clicked')
      console.log(this.label)
    }
  }
})
</script>
