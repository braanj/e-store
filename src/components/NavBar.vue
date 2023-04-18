<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">

      <router-link class="navbar-brand" to="/">E-Store</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ms-3 mb-2 mb-lg-0">
          <li class="nav-item">
            <form class="d-flex">
              <input class="form-control me-2 d-none" type="search" placeholder="Search" aria-label="Search">
              <span class="nav-link">
                <i class="fa fa-search" aria-hidden="true"></i>
              </span>
            </form>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </router-link>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "NavBar",
})
</script>

<style scoped lang="scss">
.navbar {
  background-color: var(--element-bg-color);
  box-shadow: var(--body-bg-color) 0px 4px 12px;
  .nav-link {
    text-transform: uppercase;
    font-size: 1rem;

    &[aria-current="page"] {
      color: #000000;
      font-weight: 500;
    }
  }
}
</style>