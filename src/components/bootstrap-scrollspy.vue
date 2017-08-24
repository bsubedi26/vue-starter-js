<template>
  <b-card>
    <b-nav pills slot="header" v-b-scrollspy:scrollspy-example>
      <b-nav-item href="#fat" @click="scrollIntoView">@fat</b-nav-item>
      <b-nav-item href="#mdo" @click="scrollIntoView">@mdo</b-nav-item>
      <b-nav-item-dropdown text="Dropdown 1,2,3" right-alignment>
        <b-dropdown-item href="#one" @click="scrollIntoView">one</b-dropdown-item>
        <b-dropdown-item href="#two" @click="scrollIntoView">two</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item href="#three" @click="scrollIntoView">three</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item href="#pi0" @click="scrollIntoView">@pi0</b-nav-item>
    </b-nav>
    <div id="scrollspy-example" ref="content" style="position:relative; height:300px; overflow-y:scroll;">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin scelerisque augue, sit amet finibus risus tempus quis. Suspendisse id est faucibus, dignissim arcu non, consequat tortor. Pellentesque mollis dolor vitae tellus consectetur auctor. Nam tincidunt ullamcorper tortor, a pretium tellus efficitur nec. Integer velit enim, mattis et sapien in, blandit pharetra nisi. Suspendisse euismod tortor ac tellus varius, a suscipit sapien viverra. Curabitur non nunc euismod, facilisis nulla a, auctor elit. Duis in est id augue scelerisque aliquam. Proin mollis dolor augue, nec pellentesque felis maximus nec.
      </p>
      <h4 id="fat">@fat</h4>
      <p v-for="i in 6" :key="i">
        Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure.
      </p>
      <h4 id="mdo">@mdo</h4>
      <p v-for="i in 7" :key="i">
        Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea helvetica nulla carles.
      </p>
      <h4 id="one">one</h4>
      <p v-for="i in 4" :key="i">
        Echo park consequat quis aliquip banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in, sustainable delectus consectetur fanny pack iphone.
      </p>
      <h4 id="two">two</h4>
      <p v-for="i in 4" :key="i">
        Food truck, mcsweeney's quis non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing craft beer vice keytar deserunt.
      </p>
      <h4 id="three">three</h4>
      <p v-for="i in 6" :key="i">
        Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle rights adipisicing banh mi, velit ea sunt next level locavore single-origin coffee in magna veniam. High life id vinyl.
      </p>
      <h4 id="pi0">@pi0</h4>
      <p v-for="i in 5" :key="i">
        Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's quis non freegan vinyl.
      </p>
    </div>
  </b-card>
</template>

<script>
export default {
  methods: {
    // Convenience method to scroll an element that is offscreen into view
    // Not required for ScrollSpy to work
    scrollIntoView(evt) {
      evt.preventDefault();
      const href = evt.target.getAttribute('href');
      const el = href ? document.querySelector(href) : null;
      if (el) {
        this.$refs.content.scrollTop = el.offsetTop;
      }
    }
  }
}
</script>