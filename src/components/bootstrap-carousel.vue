<template>
  <div>
    <b-carousel id="carousel1"
                background="#ababab"
                :interval="2000"
                v-model="slide"
                @slide="onSlide"
                @slid="onSlid"
    >

      <!-- Text slides with image -->
      <b-carousel-slide caption="First slide"
                        text="Technics"
                        img="https://lorempixel.com/1024/480/technics/2/"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img="https://lorempixel.com/1028/480/sports/1">
        <h1>Nice View!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img="https://lorempixel.com/1028/480/fashion/1">
        <h1>Fashion!</h1>
      </b-carousel-slide>

    </b-carousel>

  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    blankImg(x, y) {
      // Return a blank SVG image with specified width and height
      // Handy for maintaining aspect ratio for text only slides
      return "data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D" +
             "'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' " +
             "viewBox%3D'0 0 " + x + " " + y + "'%2F%3E";
    },
    onSlide(slide) {
        this.sliding = true;
    },
    onSlid(slide) {
        this.sliding = false;
    }
  }
}
</script>