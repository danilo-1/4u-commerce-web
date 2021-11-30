<template>
  <div style="">
    <div class="bg-dark d-flex justify-content-between">
      <router-link to="/dashboard" class="col-6 text-start">
        <a class="text-start"></a>
      </router-link>
      <div class="col-6 text-end">
        <div class="btn-group mt-3 me-3">
          <button class="btn btn-primary btn-lg" type="button">Perfil</button>
          <button
            class="btn btn-primary dropdown-toggle dropdown-toggle-split"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item active" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <router-link
                to="/"
                class="text-white"
                style="text-decoration: none"
                ><a class="dropdown-item">Sair</a></router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderDash",
  setup() {},
};
</script>
