<template>
  <div class="aboutWorkReport">
    <RouterTitle :routerTitle="'本所簡介'" :secondaryTitle="'工作年報'"></RouterTitle>
  </div>
</template>

<script>
import RouterTitle from "@/components/RouterTitle.vue";
export default {
  name: "AboutWorkReport",
  components: {
    RouterTitle
  }
};
</script>

<style>
</style>