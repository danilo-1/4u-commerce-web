<template>
  <div>
    <h4 class="mt-2">Cadastro</h4>
    <div class="row">
      <div class="col-12 mb-2">
        <input type="text" v-model="user.name" placeholder="Nome" />
      </div>
      <div class="col-12 mb-2">
        <input type="email" v-model="user.email" placeholder="Email" />
      </div>
      <div class="col-12 mb-2">
        <input type="password" v-model="user.password" placeholder="Senha" />
      </div>
      <div class="col-12">
        <button @click="register()">Cadastrar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      user: {
        name: null,
        email: null,
        password: null,
      },
    };
  },
  methods: {
    register() {
      console.log(this.user);
    },
  },
};
</script>

<style scoped>
</style>
