<template>
  <div>
    <div class="row mb-4">
      <h3 class="col-3 mt-3">Editar Usuário</h3>

      <div class="col-1 mt-3">
        <button class="btn btn-warning" @click="editing()">#</button>
      </div>
    </div>

    <div class="row">
      <div class="col-3">
        <input
          type="text"
          v-model="user.name"
          :disabled="edit ? false : true"
        />
      </div>
      <div class="col-3">
        <input
          type="text"
          v-model="user.email"
          :disabled="edit ? false : true"
        />
      </div>
      <div class="col-3">
        <input type="text" v-model="user.cpf" :disabled="edit ? false : true" />
      </div>
      <div class="col-3">
        <input
          type="text"
          v-model="user.telephone"
          :disabled="edit ? false : true"
        />
      </div>
    </div>

    <div class="mt-3">
      <button class="btn btn-success" @click="save(user)">Salvar</button>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import { reactive, ref, toRefs } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "Editar Usuário",
  setup() {
    const edit = ref(false);

    const route = useRoute();

    const user = ref({});

    const methods = reactive({
      getUserById() {
        axios
          .get("http://localhost:8081/api/users/get/" + route.params.id)
          .then((response) => {
            user.value = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
      },

      editing() {
        edit.value = !edit.value;
      },

      save(user) {
        axios
          .put("http://localhost:8081/api/users/edit", user)
          .then(() => {
            console.log("Usuário editado com sucesso");

            methods.editing();
            methods.getUserById();
          })
          .catch((e) => {
            console.log(e);
          });
      },
    });

    methods.getUserById();

    return {
      edit,
      route,
      user,
      ...toRefs(methods),
    };
  },
};
</script>

<style scoped>
</style>