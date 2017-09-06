<template>

  <div>
    <!-- <b-alert variant="danger" show v-if="serviceError">
      {{ serviceError.message }}
    </b-alert> -->
    <el-alert v-if="serviceError"
      :title="serviceError.message"
      type="error">
    </el-alert>
    <el-input style="max-width:225px;" class="mx-auto" placeholder="Add new Forum Category" v-model="inputCategory"></el-input>
    <el-button @click="handleSubmit(inputCategory)">Submit</el-button>

    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item :title="item.name" :name="item._id" v-for="item in forumCategories" :key="item._id">
        <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
        <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
      </el-collapse-item>
  <!-- 
      <el-collapse-item title="Consistency" name="1">
        <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
        <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
      </el-collapse-item>
      <el-collapse-item title="Feedback" name="2">
        <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
        <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
      </el-collapse-item>
      <el-collapse-item title="Efficiency" name="3">
        <div>Simplify the process: keep operating process simple and intuitive;</div>
        <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
        <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
      </el-collapse-item>
      <el-collapse-item title="Controllability" name="4">
        <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
        <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
      </el-collapse-item> -->
    </el-collapse>
    <loader v-if="$isLoading('forum/find')" />

  </div>

</template>

<script>
  export default {
    name: 'app-forum',
    data() {
      return {
        activeNames: ['1'],
        forumCategories: [],
        inputCategory: '',
        serviceError: null
      };
    },
    methods: {
      handleChange() {

      },
      handleSubmit(newCategory) {
        // const payload = {
        //   "name": newCategory,
        //   "author": "author_1",
        //   "category": "category_1",
        //   "description": "description_1"
        // }
        // this.$store.dispatch('forum-categories/create', payload)
      },
      delay(t) {
        return new Promise(resolve => setTimeout(resolve, t))
      }
    },
    async mounted() {
      // try {
      //   this.$startLoading('forum/find')
      //   await this.delay(3000)
      //   const categories = await this.$store.dispatch('forum-categories/find')
        
      //   const categories = await this.$feathers.service('forum-categories').find()
      //   this.forumCategories = categories.data
      //   this.$endLoading('forum/find')
      // } catch (err) {
      //   console.log(err)
      //   this.serviceError = err
      //   this.$endLoading('forum/find')
      // }

      // this.$feathers.service('forum-categories').on('created', (data) => {
      //   console.log('data ',data)
      //   this.forumCategories.push(data)
      // })
      
    }
  }
</script>
