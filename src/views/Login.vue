<template>
  <div class="login">
    <form action="" method="post">
      <div>
        <input type="text" id="email" placeholder="E-mail" />
      </div>
      <div>
        <input type="password" id="senha" placeholder="Senha" />
      </div>
      <div class="button">
        <button type="submit">Entrar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
form {
  margin: 0 auto;
  width: 400px;
  padding: 1em;
  border: 1px solid#CCC;
  border-radius: 1em;
}

form div + div {
  margin-top: 1em;
}
</style>
