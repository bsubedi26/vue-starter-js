<template>
  <div>
    <el-table
      :data="users"
      stripe
      style="width: 100%">
      <el-table-column
        prop="email"
        :label="userListTitle"
        width="180">
      </el-table-column>
    </el-table>

    <!-- {{users}} -->
  </div>
</template>

<script>
  export default {
    name: 'app-chat-user-list',
    props: ['users'],
    computed: {
      userListTitle() {
        return `${this.users.length} users online!`
      }
    }
  }
</script>

<style scoped>
  .cell {
    text-align: center;
  }
</style>
