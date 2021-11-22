<template>

<nav class="navbar navbar-expand-md navbar-dark  bg-dark">
   
      <router-link to="/">
      <a class="navbar-brand " href="#"><img alt="Vue logo" class="" src="../assets/logo_4uExtended.svg" style="width:100px"  /></a>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item px-2">
            <router-link to="/" class="text-white" style="text-decoration:none">
              <a>Home</a>
            </router-link>
          </li>
          <li class="nav-item px-2">
              <router-link to="/login" class="text-white" style="text-decoration:none">
                <a>Login</a>
              </router-link>
          </li>
          <li class="nav-item px-2" >
              <router-link to="/cadastro" class="text-white" style="text-decoration:none">
                <a>Cadastro</a>
              </router-link>
          </li>
        </ul>
        
      </div>
    
  </nav>
 
</template>

<script>
export default {
  name: "HeaderSite",
};
</script>

