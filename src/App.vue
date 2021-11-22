<template>
  <div id="app">
    <app-layout>
    <router-view />
    </app-layout>
  </div>
</template>

<script>
import AppLayout from './layouts/AppLayout.vue';
export default {
  components: { AppLayout },
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#back {
  background-color: rgb(230, 230, 230);
}
</style>
