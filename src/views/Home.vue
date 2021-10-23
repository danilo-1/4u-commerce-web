<template>
  <div class="d-flex justify-content-end">
    <div class="d-flex justify-content-evenly mt-2" id="header">
      <div class="me-3 ">
        <router-link to="/login">
          <span>Login</span>
        </router-link>
      </div>
      <div class="me-3">
        <router-link to="/cadastro">
          <span>Cadastro</span>
        </router-link>
      </div>
    </div>
  </div>
  <div id="logo">
    <img alt="Vue logo" src="../assets/logo-4u.jpg" />
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style scoped>
img {
  width: 300px;
  height: 300px;
}
</style>
