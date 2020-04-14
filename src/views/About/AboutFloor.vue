<template>
  <div class="aboutFloor">
    <RouterTitle :routerTitle="'本所簡介'" :secondaryTitle="'平面圖'"></RouterTitle>
    <div class="aboutFloorImgContainer">
      <img src="../../assets/image/link/firdi-map2.jpg" class="img-fluid" alt="Responsive FloorImg" />
    </div>
  </div>
</template>

<script>
import RouterTitle from "@/components/RouterTitle.vue";
export default {
  name: "AboutFloor",
  components: {
    RouterTitle
  }
};
</script>

<style>
</style>