<template>
  <div class="aboutOrganizationImg">
    <RouterTitle :routerTitle="'本所簡介'" :secondaryTitle="'組織架構圖'"></RouterTitle>
    <div class="aboutOrganizationImgContainer">
      <img
        src="../../assets/image/link/staffs_map.png"
        class="img-fluid"
        alt="Responsive Organizationimage"
      />
    </div>
  </div>
</template>

<script>
import RouterTitle from "@/components/RouterTitle.vue";
export default {
  name: "AboutOrganizationImg",
  components: {
    RouterTitle
  }
};
</script>

<style>
</style>