<template>
  <footer class="footer border-top">
    <div class="container">
      <div class="row py-5">
        <div class="col-lg-4">
          <span class="title">About the store</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nihil minima, deleniti neque, aperiam, soluta
            nemo libero inventore earum laborum quasi quaerat. Officiis repudiandae maxime doloribus iure voluptatem
            aliquam
            nulla.</p>
        </div>
        <div class="col-lg-2 col-md-6">
          <span class="title">Customer service</span>
          <ul class="list-group">
            <li class="list-group-item">
              <router-link to="/contact">Contact us</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/contact">Contact us</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/contact">Contact us</router-link>
            </li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6">
          <span class="title">Profile</span>
          <ul class="list-group">
            <li class="list-group-item">
              <router-link to="/contact">My account</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/contact">My account</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/contact">My account</router-link>
            </li>
          </ul>
        </div>
        <div class="col">
          <span class="title">Subscribe to our newsletter</span>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="example@gmail.com" aria-label="Recipient's username"
              aria-describedby="button-addon2">
            <button class="btn btn-outline-success" type="button" id="button-addon2">Subscribe</button>
          </div>
          <div class="social-links d-flex gap-4">
            <a href="#">
              <i class="fa fa-facebook-square" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter-square" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="copyright d-flex justify-content-between border-top py-3">
        <span>&copy; All reserved - E-store 2023</span>
        <router-link class="fs-6" to="/support">Help & Support</router-link>
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
  .title {
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    display: block;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .list-group-item {
    padding-left: 0;
    border: unset;
    padding-top: .25rem;
    padding-bottom: .25rem;
  }

  a {
    text-decoration: unset;
    color: var(--link-color);
    font-weight: 600;
    opacity: .6;

    &:hover {
      opacity: 1;
    }
  }

}
</style>