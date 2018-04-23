<template>
 <div class="home">
    <!-- <h1>{{ $t("body.footer")}}</h1> -->
        <router-view></router-view>
 </div>
</template>

<script>
export default {
  components: {
  },
  computed: {
  },
  data(){
    return{
    }
  },
  mounted(){
  }
}
</script>

<style style="less">
  .home{
    padding-top: 60px;
  }
</style>
