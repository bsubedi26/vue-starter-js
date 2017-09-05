<template>
  <div>
    <div :class="tableClass" style="width: 100%;">
      <div class="el-table__header-wrapper">
        <table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width: 180px;">
          <colgroup>
            <col name="el-table_1_column_4" width="180">
            <col name="gutter" width="">
          </colgroup>

          <thead>
            <tr>
              <th colspan="1" rowspan="1" class="el-table_1_column_4 is-leaf">
                <div class="cell">{{ userListTitle }}</div>
              </th>
              <th class="gutter" style="width: 0px;">
              </th>
            </tr>
          </thead>
        </table>
      </div>

      <div class="el-table__body-wrapper">
        <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 180px;">
          <colgroup><col name="el-table_1_column_4" width="180"></colgroup>
          <tbody>
            <tr @mouseover="handleMouseOver(user)" v-for="user in users" :key="user._id" class="el-table__row">
             <el-tooltip class="item" effect="dark" :content="user._id" placement="left-end">
              <td class="el-table_1_column_4">
                <div class="cell">{{ user.email }}</div>
              </td>
             </el-tooltip>
            </tr>
          </tbody>
        </table>
        <!---->
      </div>

      <div class="el-table__column-resize-proxy" style="display: none;"></div>
      <div class="resize-triggers">
        <div class="expand-trigger">
          <div style="width: 162px; height: 2140px;"></div>
        </div>
        <div class="contract-trigger"></div>
      </div>
    </div>
    
    <!-- <el-table v-if="users.length > 0" :data="users" stripe style="width: 100%">
      <el-table-column prop="email" :label="userListTitle" width="180">
      </el-table-column>
    </el-table> -->

    <!-- {{users}} -->
  </div>
</template>

<script>
export default {
  name: 'app-chat-user-list',
  props: {
      users: Array
  },
  data() {
    return {
      tableClass: "el-table el-table--fit el-table--striped el-table--enable-row-hover el-table--enable-row-transition"
    }
  },
  computed: {
    userListTitle() {
      return `${this.users.length} users online!`
    }
  },

  methods: {
    _getUserInfo() {

    },
    handleMouseOver(user) {

    }
  }
}
</script>

<style scoped>
.cell {
  text-align: center;
}
</style>
