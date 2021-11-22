<template>
 
  <div class="bg-dark bg-gradient">
    
  <div class=" container-xxl d-flex" style="height: 93.95vh;">
    <div class=" row align-items-center mx-auto">
    <div class="card  p-4 col-12">
      <span class="fw-bolder">DP-LINK 3002</span>
    <form action="" method="post">
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="Email">
        <label for="floatingInput">Email</label>
      </div>
      <div class="form-floating mb-3">
        <input type="password" class="form-control" id="floatingInput" placeholder="Senha">
        <label for="floatingInput">Senha</label>
      </div>
      
      <div class="d-flex justify-content-between">
        <router-link  to="/cadastro" class="text-white col-5" style="text-decoration:none">
          <button class="btn btn-primary " type="button">Cadastrar</button>
        </router-link>
        <router-link  to="/Dashboard" class="text-white col-5" style="text-decoration:none">
          <button class="btn btn-primary " type="button">Entrar</button>
        </router-link>
        
      </div>
    </form>
    </div>
    </div>
  </div>
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
