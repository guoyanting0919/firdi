<template>
  <div class="serveVerification">
    <RouterTitle :routerTitle="'服務項目'" :secondaryTitle="'驗證服務'"></RouterTitle>
    <div class="serverContainer"></div>
  </div>
</template>

<script>
import RouterTitle from "@/components/RouterTitle.vue";
export default {
  name: "ServeVerification",
  components: {
    RouterTitle
  }
};
</script>

<style>
</style>