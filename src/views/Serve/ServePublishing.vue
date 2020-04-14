<template>
  <div class="servePublishing">
    <RouterTitle :routerTitle="'服務項目'" :secondaryTitle="'本所出版品'"></RouterTitle>
    <div class="serverContainer"></div>
  </div>
</template>

<script>
import RouterTitle from "@/components/RouterTitle.vue";
export default {
  name: "ServePublishing",
  components: {
    RouterTitle
  }
};
</script>

<style>
</style>