<template>
  <div>    
    <el-button @click="dialogVisible = true">click to open the Dialog</el-button>

    <el-dialog
      title="Modal Message"
      :visible.sync="dialogVisible"
      size="tiny"
      :before-close="handleClose"
      :close-on-click-modal="false"
      :show-close="false">
      <span>Hello there!</span>

      <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>        
      </span>
    </el-dialog>
  </div>    

</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('Are you sure to close this dialog?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>