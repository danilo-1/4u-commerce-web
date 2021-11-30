<template>
  <div>
    <h3 class="mt-3">Administração</h3>

    <div class="row">
      <div class="col-6">
        <router-link to="/administracao/usuarios">
          <button class="btn btn-primary">Usuários</button>
        </router-link>
      </div>
      <div class="col-6">
        <router-link to="/administracao/permissoes">
          <button class="btn btn-primary">Permissões</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Administração",
};
</script>

<style scoped>
</style>