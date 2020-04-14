<template>
  <div class="aboutPurpose">
    <RouterTitle :routerTitle="'本所簡介'" :secondaryTitle="'宗旨'"></RouterTitle>
    <div class="aboutPurposeContainer">
      <!-- <h3>宗旨</h3> -->
      <ul class="purposeMenu">
        <li>研究及發展食品與生物等產業相關之科學與技術。</li>
        <li>提供食品與生物等相關產業之技術服務，及投資其具創新或前瞻性之事業，帶動產業發展。</li>
        <li>培育及訓練食品與生物等相關產業之科技人才。</li>
        <li>策進及協助食品與生物等相關產業之國際交流與發展。</li>
      </ul>
    </div>
  </div>
</template>

<script>
import RouterTitle from "@/components/RouterTitle.vue";
export default {
  name: "AboutPurpose",
  components: {
    RouterTitle
  }
};
</script>

<style>
</style>