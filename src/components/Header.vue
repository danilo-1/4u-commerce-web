<template>
  <div class="header">
    <router-link to="/">
      <a href="#default" class="logo">CompanyLogo</a>
    </router-link>
    <div class="header-right">
      <router-link to="/">
        <a>Home</a>
      </router-link>
      <router-link to="/login">
        <a>Login</a>
      </router-link>
      <router-link to="/cadastro">
        <a>Cadastro</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  overflow: hidden;
  background-color: #2e66ff;
  padding: 0px 10px;
}

.header a {
  float: left;
  color: white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background-color: white;
  color: black;
}

.header-right {
  float: right;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  .header-right {
    float: none;
  }
}
</style>