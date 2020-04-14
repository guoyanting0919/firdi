<template>
  <div class="serveLaboratory">
    <RouterTitle :routerTitle="'服務項目'" :secondaryTitle="'開放實驗室'"></RouterTitle>
    <div class="serverContainer"></div>
  </div>
</template>

<script>
import RouterTitle from "@/components/RouterTitle.vue";
export default {
  name: "ServeLaboratory",
  components: {
    RouterTitle
  }
};
</script>

<style>
</style>