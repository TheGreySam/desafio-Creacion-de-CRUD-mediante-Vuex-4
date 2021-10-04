<template>
  <div id="app">
    <Navbar/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/about">Login</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'


</script>

<style>

</style>
