<template>
  

</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    name: 'abc'
  })
  export default class Abc extends Vue {
    mounted() {
      console.log('mon')
    }
  }

</script>