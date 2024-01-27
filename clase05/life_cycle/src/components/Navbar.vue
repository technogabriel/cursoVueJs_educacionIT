<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">Educación IT</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <li class="nav-item">
            <RouterLink class="nav-link" to="/ciclo-vida">Ciclo Vida</RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/ciclo-vida-v3">Ciclo Vida V3</RouterLink>
          </li>
         
          <li class="nav-item">
            <RouterLink class="nav-link" to="/nosotros">Nosotros</RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/contacto">Contacto</RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/vuex-view">Vuexview</RouterLink>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</template>
