<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <span class="title">About the store</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nihil minima, deleniti neque, aperiam, soluta
            nemo libero inventore earum laborum quasi quaerat. Officiis repudiandae maxime doloribus iure voluptatem
            aliquam
            nulla.</p>
        </div>
        <div class="col-lg-2">
          <span class="title">Customer service</span>
          <ul class="list-group">
            <li class="list-group-item">
              <router-link to="/contact">Contact us</router-link>
            </li>
          </ul>
        </div>
        <div class="col-lg-2">
          <span class="title">Profile</span>
          <ul class="list-group">
            <li class="list-group-item">
              <router-link to="/contact">My account</router-link>
            </li>
          </ul>
        </div>
        <div class="col">
          <span class="title">Customer service</span>
          <ul class="list-group">
            <li class="list-group-item">
              <router-link to="/contact">Contact us</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component

export default class FooterNav extends Vue { }
</script>

<style lang="scss">
.footer {
  border-top: 1px solid var(--border-color);
  padding-top: 3rem;

  .title {
    margin-bottom: 1.5rem;
    display: block;
    font-size: 1.5rem;
    font-weight: 600;
  }
  .list-group-item {
    padding-left: 0;
    border: unset;
  }

}
</style>