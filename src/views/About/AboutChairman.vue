<template>
  <div class="aboutChairman">
    <RouterTitle :routerTitle="'本所簡介'" :secondaryTitle="'董事長簡歷'"></RouterTitle>
    <div class="chairmanContainer">
      <div class="row mx-0">
        <div class="col-3 p-0">
          <div class="chairmanImg"></div>
        </div>
        <div class="col-9">
          <div class="chairmanTxt">
            <div class="chairmanSecondary">
              <h3>董事長</h3>
            </div>
            <div class="chairmanTitle">
              <h2>謝孟璋先生</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <h5>經歷(現任)：</h5>
      <p>
        財團法人食品工業發展研究所 董事長
        <br />台東興業股份有限公司 副董事長
        <br />駿瀚生化股份有限公司 董事長
        <br />全國工業總會 理事
        <br />臺灣罐頭食品工業同業公會 榮譽理事長
      </p>
      <h5>董事長的話</h5>
      <p>
        食品所創立五十週年，是個可貴的里程碑。在歷屆董事長及所長的領導之下，食品所所扮演的角色也隨著食品產業的變化，不斷的精進求新，得到產業的肯定。
        全球食品產業正面臨新的挑戰，資訊的發達，技術的改變，消費者的心態都不斷地挑戰過去的思維。食品所也必需在這種環境下，檢視自我，再求突破。過去食品所默默的耕耘，奠定了紮實的基礎，未來食品所更以食品標竿自許，放大能量，為廣大的社會大眾服務。
        我很榮幸參與食品所的工作，更期待和同仁們一同努力，齊心將食品所推向另一個高峰!
      </p>
    </div>
  </div>
</template>

<script>
import RouterTitle from "@/components/RouterTitle.vue";
export default {
  name: "AboutChairman",
  components: {
    RouterTitle
  }
};
</script>

<style>
</style>