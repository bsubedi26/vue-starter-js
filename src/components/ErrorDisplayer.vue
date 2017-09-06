<template>
  <div v-if="error">
    ERROR
  </div>

</template>


<script>
import { Message } from 'element-ui'

export default {
  // props: ['error'],
  name: 'app-error-displayer',
  data() {
    return {
      error: {}
    }
  },

  mounted() {
    this.error['error'] = true
    Message({
      showClose: true,
      message: 'You must be authenticated first.',
      type: 'error',
    });
    // this.error = this.$store.getters.errorOnAuthenticate
  }

}

</script>

