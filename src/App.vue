<template>
<div>
  <div id="nav">
    <div>
    <nav class="navbar navbar-light bg-light">

    <router-link to='/'>
      <a class="navbar-brand">Home</a>
    </router-link>

    <router-link to='/merch'>
      <a class="navbar-brand">Merch</a>
    </router-link>

    <router-link to='/cart'>
      <a class="navbar-brand">Cart</a>
    </router-link>

    <router-link to='/contact'>
      <a class="navbar-brand">Contact</a>
    </router-link>

    <router-link to='/legal'>
      <a class="navbar-brand">Legal</a>
    </router-link>
    </nav>
  </div>
  </div>
  <router-view/>
</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
  }
})
</script>

<style>
#app {
  font-family: 'Kaisei HarunoUmi', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
