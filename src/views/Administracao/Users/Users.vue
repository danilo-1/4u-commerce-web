<template>
  <div>
    <h3 class="mt-3">Usuários</h3>

    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Cpf</th>
          <th>Telefone</th>
          <th>Editar?</th>
          <th>Deletar?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.cpf }}</td>
          <td>{{ user.telefone }}</td>
          <td>
            <router-link :to="'/administracao/usuarios/editar/' + user.id">
              <button class="btn btn-warning ms-1">Editar</button>
            </router-link>
          </td>
          <td>
            <button class="btn btn-danger ms-1" @click="deleteUser(user.id)">
              Deletar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const axios = require("axios");
import { reactive, ref, toRefs } from "vue";

export default {
  name: "Administração de Usuários",
  setup() {
    const users = ref([]);

    const methods = reactive({
      getAllUsers() {
        axios
          .get("http://localhost:8081/api/users/get")
          .then((response) => {
            users.value = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
      },

      deleteUser(id) {
        axios
          .delete("http://localhost:8081/api/users/delete/" + id)
          .then(() => {
            console.log("Usuário deletado com sucesso");
            this.getAllUsers();
          })
          .catch((e) => {
            console.log(e);
          });
      },
    });

    methods.getAllUsers();

    return {
      users,
      ...toRefs(methods),
    };
  },
};
</script>

<style scoped>
</style>