<template>
  <div class="serveQuality">
    <RouterTitle :routerTitle="'服務項目'" :secondaryTitle="'品質控管'"></RouterTitle>
    <div class="serverContainer"></div>
  </div>
</template>

<script>
import RouterTitle from "@/components/RouterTitle.vue";
export default {
  name: "ServeQuality",
  components: {
    RouterTitle
  }
};
</script>

<style>
</style>