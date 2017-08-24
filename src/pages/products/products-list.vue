<template>

  <!-- <div class="d-flex flex-row flex-wrap justify-content-center"> -->
  <div class="products-list-container">
    <el-row type="flex" justify="center">
      <el-col class="p-3" :span="12">

        <el-form :inline="true" :model="searchForm">
          <el-form-item label="Search:">
            <el-input v-model="searchForm.searchQuery" placeholder="Filter Products"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-row>
      <el-col class="p-3" :span="8" v-for="product in products" :key="product.id">
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
            <el-button type="success" @click="goToDetails(product)">Details</el-button>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    
    <!-- <div class="row justify-content-center">
      <div class="card col-md-4" v-for="product in products" :key="product.id">
        <div class="row mx-auto">
          <strong>{{product.id}}) {{product.name}}</strong> 
          <b-badge class="m-1" variant="info">${{ product.price }}</b-badge>
        </div>
        <img width="175" height="175" class="mx-auto mt-3" :src="product.src" />
    
        <p class="products-info-text mt-3">{{product.info}}</p>
    
        <div class="d-flex flex-column">
        <button @click="addToCart(product)" class="btn btn-primary mb-3 cursor-pointer">Add to Cart</button>
        <button @click="goToDetails(product)" class="btn btn-outline-success mb-3 cursor-pointer">Details</button>
        </div>
      </div>
    </div> -->
  
  </div>

</template>

<script>

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
          .then(response => {
            this.$message({
              showClose: true,
              message: 'Successfully added product to cart.',
              type: 'success'
            });
          })
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
</style>
