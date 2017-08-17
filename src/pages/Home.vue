<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  
    <div class="row">
      <div class="card col-4 m-4" v-for="product in products" :key="product.id">
        <strong>{{product.id}}) {{product.name}}</strong>
        <img width="175" height="175" class="mx-auto mt-3" :src="product.src" />
  
        <p class="mt-3">{{product.info}}</p>

        <div class="row mx-auto">
            <h5 class="col">Price: ${{product.price}}</h5>
            <input placeholder="Quantity" style="width:60%" class="col form-control mb-3" type="number" 
              v-model="quantity"
            />
        </div>


        <button @click="addToCart(product, quantity)" class="btn btn-primary mb-3">Add to Cart</button>
        <button @click="handleDetailsClick(product)" class="btn btn-outline-success mb-3">Details</button>

      </div>

    </div>
  </div>
</template>

<script>

const PRODUCTS_PHONE = [
  {
    id: 1, name: 'Nexus S', src: "/static/images/phones/dell-venue.0.jpg", price: 99.99,
    info: "The Nexus S is a smartphone co-developed by Google and Samsung and manufactured by Samsung Electronics for release in 2010. It was the first smartphone to use the Android 2.3 Gingerbread operating system, and the first Android device to support Near Field Communication (NFC)."
  },
  {
    id: 2, name: 'Dell Venue', src: "static/images/phones/dell-venue.0.jpg", price: 109.99,
    info: "The Dell Venue is a line of Android smartphones and tablets manufactured by Dell. The first Dell Venue was released for both T-Mobile and AT&T in the United States, and for KT in South Korea. It was the second Dell smartphone to be released in the US and features the Dell Stage UI also found on the Dell Streak line of tablets."
  },
  {
    id: 3, name: 'Droid 2', src: "/static/images/phones/droid-2-global-by-motorola.0.jpg", price: 89.99,
    info: "The Motorola Droid 2 is the fifth phone in Verizon's Droid line. It runs the Android operating system by Google, and can run Flash Player 10.1. It comes with 8 GB of internal memory and is shipped with an additional 8 GB SDHC card, upgradable to 32 GB. It has a 3.7 in display and a 5-megapixel camera."
  },
  {
    id: 4, name: 'Droid Pro', src: "/static/images/phones/droid-pro-by-motorola.0.jpg", price: 129.99,
    info: "The Motorola Droid Pro is an Android-based smartphone manufactured by Motorola and released on November 18, 2010, for Verizon Wireless and June 5, 2011, for Sprint. These devices are available for Verizon, Sprint and Boost Mobile in the United States, and are designed for business users."
  },
  {
    id: 5, name: 'Motorola Bravo', src: "/static/images/phones/motorola-bravo-with-motoblur.0.jpg", price: 119.99,
    info: "The Motorola Bravo has a nice 3.7 inch WVGA display, a slim build, and a multimedia-friendly feature set that includes DLNA support. It has good call quality as well. The Motorola Bravo is a midrange Android smartphone with solid multimedia features."
  },
  {
    id: 6, name: 'Motorola Defy', src: "/static/images/phones/motorola-defy-with-motoblur.0.jpg", price: 139.99,
    info: "The Motorola Defy, also known as Motorola Defy A8210 & MB525, is an Android-based smartphone from Motorola. It fills a unique market segment, by being one of the few small, IP67 rated smartphones available. It is water-resistant, dust-resistant, and has an impact-resistant screen."
  },
]


export default {
  name: 'hello',
  data() {
    return {
      msg: 'Products List',
      products: PRODUCTS_PHONE,
      quantity: ''
    }
  },
  mounted() {
    console.log('mo ', this.products)
  },

  
  methods: {
    handleQuantityInput(product) {
      console.log(this)
    },

    addToCart(product, quantity) {
      console.log(product, quantity)
      // return url
    },
    handleDetailsClick(product) {

    }
  },
  
  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
