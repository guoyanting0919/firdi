<template>
  <div class="NewsActivity">
    <RouterTitle
      :routerTitle="'最新消息'"
      :secondaryTitle="'研討會及重要活動'"
      :routerTitlePath="'NewsActivityHome'"
    ></RouterTitle>
    <router-view></router-view>
  </div>
</template>

<script>
import RouterTitle from "@/components/RouterTitle.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  name: "NewsActivity",
  components: {
    RouterTitle,
    Pagination
  }
};
</script>

<style>
</style>