<template>
  <div class="aboutHistory">
    <RouterTitle :routerTitle="'本所簡介'" :secondaryTitle="'沿革'"></RouterTitle>
    <div class="aboutHistoryContainer">
      <!-- <h3>沿革</h3> -->
      <p>
        財團法人食品工業發展研究所標誌外圍 ERVDITIO. AVCTVS. INITVM. MCMLXV四字乃古拉丁文，意為研究.發展.創新. 1965年在台北成立辦事處 1967年11月1日新竹研究大樓落成啟用
        <br />
        <br />財團法人食品工業發展研究所為非營利性財團法人組織，成立於1965年，由台灣罐頭食品工業同業公會、前行政院國際經濟合作發展委員會暨前中國農村復興聯合委員會共同捐資設立。成立初期協助台灣罐頭食品業提昇產品之國際競爭力，創造台灣鳳梨、洋菇、蘆筍、竹筍出口連年世界第一的美譽。之後逐步擴展研發領域，建立食品與生技產業之關鍵技術，為台灣食品領域最具規模之研究發展與專業訓練機構。此外，本所於1982年成立菌種保存及研究中心，2002年更名為生物資源保存及研究中心，為亞洲最完整之生物資源中心。2005年進駐位於台南市的南台灣創新園區，成立台灣南部地區的服務窗口。2010負責進駐及營運嘉義產業創新研發中心。
      </p>
    </div>
  </div>
</template> 

<script>
import RouterTitle from "@/components/RouterTitle.vue";
export default {
  name: "AboutHistory",
  components: {
    RouterTitle
  }
};
</script>

<style>
</style>