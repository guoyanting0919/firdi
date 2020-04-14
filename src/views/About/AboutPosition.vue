<template>
  <div class="aboutPosition">
    <RouterTitle :routerTitle="'本所簡介'" :secondaryTitle="'位置圖'"></RouterTitle>
    <div class="aboutPositionContainer">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.0580131500446!2d120.96864131546026!3d24.793466954044444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346835ee7392baeb%3A0x9475b8d0f2b27e2e!2zMzAw5paw56u55biC5p2x5Y2A6aOf5ZOB6LevMzMx6Jmf!5e0!3m2!1szh-TW!2stw!4v1586851763359!5m2!1szh-TW!2stw"
        width="100%"
        height="450"
        frameborder="0"
        style="border:0;"
        allowfullscreen
        aria-hidden="false"
        tabindex="0"
      ></iframe>
      <div class="positionInfo">
        <h3>交通建議</h3>
        <ul>
          <li>光復路及食品路於上下班時段交通擁擠，且本所停車位有限請受訓學員盡量搭乘大眾交通工具。</li>
          <li>
            搭高鐵來所之來賓：
            可於六家火車站搭台鐵區間車至新竹火車站(終點站)，約20分鐘。下車後走路到食品所約15分鐘、搭計程車5分鐘。
            或於高鐵站直接搭計程車到食品所，正常約25分鐘(尖峰時段易塞車)。
          </li>
          <li>
            由新竹以北經中山高來所之來賓：
            中山高速公路 → 新竹交流道(右彎) → 光復路(左彎) → 食品路
          </li>
          <li>
            由新竹以南經中山高來所之來賓：
            中山高速公路 → 科學園區匝道(左彎) → 園區二路(左灣) → 新安路 → 寶山路(左彎) → 食品路
          </li>
          <li>
            經二高接中山高來所之來賓：
            二高 → 中山高(北上) → 科學園區匝道(左彎) → 園區二路(左彎) → 新安路 → 寶山路(左彎) → 食品路
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import RouterTitle from "@/components/RouterTitle.vue";
export default {
  name: "AboutPosition",
  components: {
    RouterTitle
  }
};
</script>

<style>
</style>