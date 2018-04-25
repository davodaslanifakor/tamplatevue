<template>
  <div class="layout">
    <vue-modaltor :visible="open" @hide="hideModal">
      <app-login/>
    </vue-modaltor>
    <button @click="open=true">modal-basic</button>
    <div class="el1full" v-bar>
      <div class="el2full">
        <app-sidebar/>
        <div class="main-layout">
          <router-view></router-view>
        </div>
        <app-footer/>
      </div>
    </div>
  </div>
</template>
<script>
import sidebar from '~/components/navbar.vue'
import footer from '~/components/footer.vue'
import login from '~/components/login.vue'
export default {
  layout: 'default',
  components: {
    'app-sidebar': sidebar,
    'app-footer': footer,
    'app-login':login
  },

  data () {
    return {
      defaultHeight: '450px',
      open: false
    }
  },
  mounted () {
    // this.defaultHeight = window.innerHeight - 338   +'px'
  },
  methods: {
    hideModal () {
      this.open = false
    }
  }
}
</script>
<style lang="less">
body {
  margin: 0;
  overflow: hidden;
  padding: 0;
  -webkit-overflow-scrolling: touch;
}
.el1full {
  display: block;
  width: auto;
  height: 100vh;
}
.el1full {
  display: block;
  width: 100%;
  height: 100vh;
}
.main-layout {
  padding: 10px 0;
  min-height: 750px;
}
</style>
