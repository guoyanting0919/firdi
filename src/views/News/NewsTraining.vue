<template>
  <div class="newsTraining">
    <RouterTitle
      :routerTitle="'最新消息'"
      :secondaryTitle="'最新服務與訓練'"
      :routerTitlePath="'NewsTrainingHome'"
    ></RouterTitle>
    <router-view></router-view>
  </div>
</template>

<script>
import RouterTitle from "@/components/RouterTitle.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  name: "NewsTraining",
  components: {
    RouterTitle,
    Pagination
  }
};
</script>

<style>
</style>