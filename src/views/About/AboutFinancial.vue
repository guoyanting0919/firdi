<template>
  <div class="aboutFinancial" style="margin-bottom: 12rem;">
    <RouterTitle :routerTitle="'本所簡介'" :secondaryTitle="'財務報表'"></RouterTitle>
    <div class="aboutFinancialContainer">
      <a class="financialLink" href="http://ofs.firdi.org.tw:7979/filefolder/食品所107年度決算書.pdf">
        <i class="mr-1 fas fa-cloud-download-alt"></i>107年度決算書
      </a>
    </div>
  </div>
</template>

<script>
import RouterTitle from "@/components/RouterTitle.vue";
export default {
  name: "AboutFinancial",
  components: {
    RouterTitle
  }
};
</script>

<style>
</style>