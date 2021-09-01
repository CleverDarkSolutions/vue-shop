<template>
  <div>
    <nav class="navbar navbar-light bg-light">

    <router-link :to='path1'>
      <a class="navbar-brand">{{ text1 }}</a>
    </router-link>

    <router-link :to='path2'>
      <a class="navbar-brand">{{ text2 }}</a>
    </router-link>

    <router-link :to='path3'>
      <a class="navbar-brand">{{ text3 }}</a>
    </router-link>

    <router-link>
      <a class="navbar-brand">{{ text4 }}</a>
    </router-link>
    </nav>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar',
  components: {},
  props: {
    text1: String,
    text2: String,
    text3: String,
    text4: String,

    path1: String,
    path2: String,
    path3: String,
    path4: String
  }
})
</script>
