<template>
  <div class="aboutFounder">
    <RouterTitle :routerTitle="'本所簡介'" :secondaryTitle="'創辦人事略'"></RouterTitle>
    <div class="founderList mb-1">
      <div class="founderWrap">
        <div class="listWrap">
          <div class="listItem">序文</div>
          <div class="listItem">重大記事</div>
          <div class="listItem">照片記錄</div>
          <div class="listItem">謝成源先生紀念科技獎</div>
        </div>
      </div>
    </div>
    <div class="founderContainer">
      <div class="row mx-0">
        <div class="col-3 p-0">
          <div class="founderImg"></div>
        </div>
        <div class="col-9">
          <div class="founderTxt">
            <div class="founderSecondary">
              <h3>無私的開創</h3>
            </div>
            <div class="founderTitle">
              <h2>創辦人 謝 成源先生</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <h5>卓然有成 飲水思源</h5>
      <p>本所創辦人 謝公成源先生（1904-1985）獻身我國罐頭產業三十餘年。由於 先生之積極奉獻，不僅促成我國外銷鳳梨、洋菇、蘆筍等罐頭辦理聯合收購原料，實施計劃生產，穩定農工供需原料秩序；同時辦理合作外銷，穩定國際市場銷售秩序；更積極為同業爭取融資，減輕資金積壓，降低產銷成本。此外，先生對外策組世界鳳梨工業研究發展協會，促進國際合作，而對內則促成設立本所，奠定我國食品科技研發基礎。</p>
      <p>本所為我國少數由民間捐助成立之財團法人研究機構。當初 先生已規劃在罐頭工廠最密集的彰化地區購地興建研究所，由於李國鼎先生堅持科技研發首重人才，新竹有交大與清大等學府，有利人才招募，因此 先生從善如流，積極募款由本所於新竹現址購地興建，使本所得以做長遠的發展規劃。其後 先生更極力促成設置本所罐頭基金，使本所業務得以持續推展。先生對本所之貢獻，永不磨滅。</p>
      <p>先生於七十四年二月辭世，當年一月間，先生仍堅持全程主持本所董事會，其對本所之情誼，自始自終，恆常如一，令人感佩。本所同仁亦不負 先生當初創建研究所之心志，在 先生辭世後，仍一本初衷，不僅持續協助食品產業轉型與發展，同時，在生物資源之保存、開發與利用方面，更開拓出一片新事業。在 先生創辦本所三十餘年之後，仍能昂然挺立，卓然有成。</p>
      <p>先生之銅像於七十六年間豎立於本所研究大樓一樓中庭；另財團法人謝成源先生食品科技發展基金會於八十六年間，於本所設置「謝公成源特殊貢獻獎」，以表揚本所傑出成就與貢獻之個人或團隊；而本所於八十九年間以自有資金興建員工學員宿舍落成，董事會為紀念 先生對本所之貢獻，特別將大樓命名為「成源樓」。先生辭世至今已近二十年，然 先生創新與創業之精神，與時俱在，歷久彌新。</p>
      <p>依台灣人的習俗，今年是 先生農曆虛歲百歲冥誕。為明年 先生百歲誕辰活動暖身，特於本所三十六週年所慶之際，將 先生創辦本所及擔任本所董事長期間，所留下之珍貴照片與事蹟，編輯成冊，用策來茲，砥礪後進，飲水思源，再造新猷。</p>
    </div>
    <div class="founderSign">
      <div class="sign">
        <h3>劉廷英</h3>
        <p>中華民國九十二年十一月一日</p>
      </div>
    </div>
  </div>
</template>

<script>
import RouterTitle from "@/components/RouterTitle.vue";
export default {
  name: "AboutFounder",
  components: {
    RouterTitle
  }
};
</script>

<style>
</style>