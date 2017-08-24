<template>
  <div>
    <!-- Tabs with card integration -->
    <b-card no-body>
      <b-tabs small card ref="tabs" v-model="tabIndex">
        <b-tab title="General">
          I'm the first fading tab
        </b-tab>
        <b-tab title="Edit profile">
          I'm the second tab
          <b-card>I'm the card in tab</b-card>
        </b-tab>
        <b-tab title="Premium Plan" disabled>
          Sibzamini!
        </b-tab>
        <b-tab title="Info">
          I'm the last tab
        </b-tab>
      </b-tabs>
  
    </b-card>
  
    <!-- Control buttons-->
    <div class="text-center">
      <b-button-group class="mt-2">
        <b-btn @click="tabIndex--">Previous</b-btn>
        <b-btn @click="tabIndex++">Next</b-btn>
      </b-button-group>
      <br>
      <span class="text-muted">Current Tab: {{tabIndex}}</span>
    </div>
  
    <br>
    <br>
  
    <b-card no-body>
      <b-tabs card>
        <!-- Render Tabs -->
        <b-tab :title="`Tab ${i}`" v-for="i in tabs" :key="i">
          Tab Contents {{i}}
          <b-btn size="sm" variant="danger" class="float-right" @click="()=>closeTab(i)">
            Close tab
          </b-btn>
        </b-tab>
  
        <!-- Newtab Button (Using tabs slot) -->
        <b-nav-item slot="tabs" @click.prevent="newTab" href="#">
          +
        </b-nav-item>
  
        <!-- Render this if no tabs -->
        <div slot="empty" class="text-center text-muted">
          There are no open tabs
          <br> Open a new tab using + button.
        </div>
      </b-tabs>
    </b-card>
  
  </div>
</template>

<script>
export default {
  data() {
      return {
        tabIndex: 0,
        tabs: [],
        tabCounter: 0
    }
  },
  methods: {
    closeTab(x) {
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i] === x) {
          this.tabs.splice(i, 1);
        }
      }
    },
    newTab() {
      this.tabs.push(this.tabCounter++);
    }
  }
}
</script>