<template>
  <div class="servePoison">
    <RouterTitle :routerTitle="'服務項目'" :secondaryTitle="'運作之毒性化學物'"></RouterTitle>
    <div class="serverContainer"></div>
  </div>
</template>

<script>
import RouterTitle from "@/components/RouterTitle.vue";
export default {
  name: "ServePoison",
  components: {
    RouterTitle
  }
};
</script>

<style>
</style>