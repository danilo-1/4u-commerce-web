<template>
  <Header />
  <div>
    <h4 class="mt-2">Cadastro</h4>
    <div class="row">
      <form @submit.prevent="register()">
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
        <button type="submit">Cadastrar</button>
      </div>
      </form>
    </div>
  </div>
  <div v-if="verific == true">
      <div class="alert alert-primary" role="alert">
        Usuário cadastrado com sucesso!
      </div>
  </div>
  <div v-if="error == true">
      <div class="alert alert-danger" role="alert">
        Erro ao se cadastrar!
      </div>
  </div>
</template>

<script>
import { toRefs, ref, reactive } from 'vue';
import Header from "../components/Header.vue";
import UserService from "../services/UserService"
export default {
  name: "Register",
  components: {
    UserService,
    Header,
  },
  setup(){
    const verific = ref(false)
    const error = ref(false)
    const data = reactive({
      user: {
        name: "",
        email: "",
        password: "",
      },
      
      })
      const methods = reactive({
          register() {
        UserService.register()
        .then(()=>{
          verific.value = true
        })
        .catch(()=>{
          error.value = true
        })
        }
      })
    return{
      verific,
      error,
      ...toRefs(data),
      ...toRefs(methods)
    }
  }
  
  
};
</script>

<style scoped>
</style>
