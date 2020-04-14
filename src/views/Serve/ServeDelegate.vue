<template>
  <div class="serveDelegate">
    <RouterTitle :routerTitle="'服務項目'" :secondaryTitle="'委託服務'"></RouterTitle>
    <div class="serverContainer"></div>
  </div>
</template>

<script>
import RouterTitle from "@/components/RouterTitle.vue";
export default {
  name: "ServeDelegate",
  components: {
    RouterTitle
  }
};
</script>

<style>
</style>