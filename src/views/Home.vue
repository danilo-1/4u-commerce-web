<template>
  <Header />
  <div id="logo">
    <img alt="Vue logo" src="../assets/logo-4u.jpg" />
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: 'Home',
  components: {
    Header,
  }
}
</script>

<style scoped>
img {
  width: 300px;
  height: 300px;
}
</style>
