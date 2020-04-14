<template>
  <div class="servePatent">
    <RouterTitle :routerTitle="'服務項目'" :secondaryTitle="'專利寄存'"></RouterTitle>
  </div>
</template>

<script>
import RouterTitle from "@/components/RouterTitle.vue";
export default {
  name: "ServePatent",
  components: {
    RouterTitle
  }
};
</script>

<style>
</style>