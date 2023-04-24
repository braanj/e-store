<template>
  <div class="product-details">
    <div class="row gap-3 justify-content-between">
      <div class="col-lg-7">
        <ProductHeader :product="product"/>
        <div class="d-flex justify-content-center">
          <ThumbsSwiper :images="product.images" />
        </div>
      </div>
      <div class="col-lg-4 px-4">
        <!-- <div class="mt-5 pb-3 row variant-container align-items-center">
          <h3 class="fs-4">{{ product.name }}</h3>
          <p>{{ product.description }}</p>
        </div> -->
        <ProductOptions :options="product.options" />
      </div>
    </div>
    <AppTabs :tabList="tabList">
      <template v-slot:tabPanel-1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ipsam eius quo, voluptatum voluptate blanditiis et doloribus quam dolores dicta a assumenda ab aspernatur debitis minus esse perspiciatis, id porro! <br>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit inventore fuga modi quam earum porro blanditiis rerum atque, sapiente eius optio iste quas aspernatur deserunt ab voluptatem recusandae quae ex.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit inventore fuga modi quam earum porro blanditiis rerum atque, sapiente eius optio iste quas aspernatur deserunt ab voluptatem recusandae quae ex.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
        </ul>
      </template>
      <template v-slot:tabPanel-2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime aperiam atque ex sed repellendus impedit quasi omnis iste optio architecto harum ut reprehenderit, repellat alias deleniti. Repellendus, beatae voluptatem! <br>
      Consequatur autem, optio neque non amet molestias earum eaque provident deleniti odit dolorum voluptatem ratione numquam laboriosam dolore nam commodi quod voluptatum assumenda itaque esse qui libero placeat. Ipsa, enim! <br>
      Culpa, mollitia ipsum expedita tempore ea, exercitationem dicta laudantium quas esse aspernatur quia? A distinctio, nihil ratione nobis provident expedita laudantium alias delectus, corporis libero dolore placeat! Obcaecati, incidunt natus?</template>
    </AppTabs>
    <RelatedProducts />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductHeader from './ProductHeader.vue';
import ProductOptions from './ProductOptions.vue';
import { Product } from '@/models/Product';
import ThumbsSwiper from './ThumbsGallery.vue';
import AppTabs from './AppTabs.vue';
import RelatedProducts from './RelatedProducts.vue';

@Component({
  components: {
    ProductHeader,
    ProductOptions,
    ThumbsSwiper,
    AppTabs,
    RelatedProducts
  },
})

export default class ProductDetails extends Vue {
  @Prop() product!: Product

  tabList = ['Lorem ipsum 1', 'Lorem ipsum 2']
}
</script>