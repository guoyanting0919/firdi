<template>
  <div class="newsElse">
    <RouterTitle :routerTitle="'最新消息'" :secondaryTitle="'其他'" :routerTitlePath="'NewsElseHome'"></RouterTitle>
    <router-view></router-view>
  </div>
</template>

<script>
import RouterTitle from "@/components/RouterTitle.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  name: "NewsElse",
  components: {
    RouterTitle,
    Pagination
  }
};
</script>

<style>
</style>