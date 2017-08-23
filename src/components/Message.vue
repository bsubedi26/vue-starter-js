<template>
  
</template>

<script>
  import { Message } from 'element-ui';
  
  export default {
    present(option) {
      switch(option) {
        case 'authRequired': {
          return Message.error({
            showClose: true,
            message: 'You must be logged in to access this page.',
            duration: 2500
          });
        }
      }
      
    }
  };
</script>