<template>
  <div v-if="error">
    ERROR
  </div>

</template>


<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  // props: ['error'],
  name: 'app-error-displayer'
})
export default class ErrorDisplayer extends Vue {
  error = {};

  mounted() {
    this.error['error'] = true
    this.$message({
      showClose: true,
      message: 'You must be authenticated first.',
      type: 'error',
    });
    // this.error = this.$store.getters.errorOnAuthenticate
  }

}

</script>

