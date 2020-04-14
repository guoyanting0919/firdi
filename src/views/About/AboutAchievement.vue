<template>
  <div class="aboutAchievement">
    <RouterTitle :routerTitle="'本所簡介'" :secondaryTitle="'專業成就'"></RouterTitle>
    <div class="aboutAchievementContainer">
      <!-- <h3>專業成就</h3> -->
      <ul class="achievementMenu">
        <h4>台灣最具公信力的食品檢驗與輔導機構</h4>
        <li>衛生署第一家認可之食品分析檢驗機構，且認可之項目最多</li>
        <li>美國FDA採認之殺菌權威機構</li>
        <li>日本厚生勞動省認可之輸出公共檢驗機構</li>
        <li>協助政府推動優良食品認證制度最主要的研究機構，包括農委會CAS、經濟部GMP、衛生署HACCP及財政部酒品等</li>
        <li>對外服務項目皆通過ISO或TAF認證</li>
      </ul>
      <ul class="achievementMenu">
        <h4>亞洲最完整的生物資源中心、台灣生物產業發展的重要基磐</h4>
        <li>經濟部支持設置之產業生物資源庫</li>
        <li>經濟部智慧局唯一指定之專利生物材料寄存機構</li>
        <li>農委會支持設置之農業微生物種源庫</li>
        <li>國家衛生研究院合作設置之細胞庫核心設施</li>
        <li>經濟部支持設置之台灣幹細胞庫</li>
        <li>推動台灣自行完成真核生物全基因體序列之研究機構</li>
        <li>全球第一個通過國際認證之多功能生物資源中心</li>
      </ul>
      <ul class="achievementMenu">
        <h4>台灣食品與生物產業最佳研發伙伴</h4>
        <li>擁有400名以上專業研發人力，以及多項生物資源新產物以及食品新產品開發與應用之技術平台，每年提供產業服務數千家次。</li>
        <li>擁有數十項國際食品製程及多項產品之創新專利，以及全球最具規模之無菌加工及包裝試驗工廠，協助食品業推出台灣第一條生產線及第一項產品，推動台灣精緻農產、素肉、保健機能性食品與飲料等多項食品創新產業之發展。</li>
      </ul>
    </div>
  </div>
</template>

<script>
import RouterTitle from "@/components/RouterTitle.vue";
export default {
  name: "AboutAchievement",
  components: {
    RouterTitle
  }
};
</script>

<style>
</style>