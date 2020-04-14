<template>
  <div class="serveManual">
    <RouterTitle :routerTitle="'服務項目'" :secondaryTitle="'服務手冊'"></RouterTitle>
    <div class="serverContainer"></div>
  </div>
</template>

<script>
import RouterTitle from "@/components/RouterTitle.vue";
export default {
  name: "ServeManual",
  components: {
    RouterTitle
  }
};
</script>

<style>
</style>