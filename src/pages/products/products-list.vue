<template>

  <div class="products-list-container">
    <el-row>
      <!-- SEARCH BAR  -->
      <el-col class="p-3">
        <el-form :inline="true" :model="searchForm">
          <el-form-item>
            <el-input class="search-input" v-model="searchForm.searchQuery" placeholder="Filter Products"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <!-- PRODUCT ITEMS FOR LOOP  -->
    <el-row>
      <el-col class="p-3 product-item" :span="8" v-for="product in products" :key="product.id">
        <el-card>
          <strong>{{product.id}}) {{product.name}}</strong> 
          <el-tag>${{ product.price }}</el-tag>
          <img width="175" height="175" class="mt-3" :src="product.src" />

          <el-rate
            class="p-3"
            v-model="rating"
            text-color="#ff9900"
            text-template="">
          </el-rate>
          <p class="products-info-text mt-3">{{product.info}}</p>


          <el-row type="flex" justify="center">
            <el-button type="primary" @click="addToCart(product)">Add to Cart</el-button>
            <el-button type="info" @click="goToDetails(product)">Details</el-button>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    
  </div>

</template>

<script>
import { Message } from 'element-ui'

  export default {
    name: 'products-list',
    data() {
      return {
        rating: 4,
        msg: 'Products List',
        searchForm: {
          searchQuery: ''
        }
      }
    },
    methods: {
      handleSearchQuery(query) {

      },
      addToCart(product) {
        this.$store.dispatch('addToCart', product)
      },
      goToDetails(product) {
        this.$router.push(`/products/details/${product.id}`)
      }
    },
    computed: {
      products() {
        return this.$store.getters.productPhones.filter(product => {
          return product.name.toLowerCase().includes(this.searchForm.searchQuery.toLowerCase())
        })
      },
    }
  }
</script>

<style scoped>
  template { 
    overflow-x: hidden;
  }
  .products-info-text {
    min-height: 200px;
  }
  .products-list-container {
    /* max-width: 768px; */
    /* margin: auto; */
  }
  .product-item {
    width: 325px;
    height: 690px;
  }

  .search-input {
    width: 500px;
    border-radius: 0;
  }
</style>
