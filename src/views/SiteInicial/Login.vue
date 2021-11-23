<template>
  <div class="bg-dark bg-gradient">
    <div class="container-xxl d-flex" style="height: 93.95vh">
      <div class="row align-items-center mx-auto">
        <div class="card p-4 col-12">
          <span class="fw-bolder fs-3">Login</span>
          <form @submit.prevent="login()">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                v-model="user.email"
                placeholder="Email"
              />
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingInput"
                v-model="user.password"
                placeholder="Senha"
              />
              <label for="floatingInput">Senha</label>
            </div>

            <div class="d-flex justify-content-between">
              <router-link
                to="/cadastro"
                class="text-white col-5"
                style="text-decoration: none"
              >
                <button class="btn btn-primary" type="button">Cadastrar</button>
              </router-link>
              <div class="text-white col-5">
                <button
                  class="btn btn-primary"
                  style="text-decoration: none"
                  type="submit"
                >
                  Entrar
                </button>
              </div>
              <div v-if="error">
                <span>{{ error }}</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: null,
        password: null,
      },

      error: null,

      state: false,
    };
  },
  methods: {
    login() {
      axios
        .post("http://localhost:8081/api/users/login", this.user)
        .then((response) => {
          if (!response.data) {
            this.error = "Email ou senha inválidos";
          } else {
            this.$router.push("/dashboard");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
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
