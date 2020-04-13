<template>
  <div class="purchase">
    <Header></Header>
    <RouterTitle :routerTitle="'採購公告'"></RouterTitle>
    <router-view></router-view>
    <Cooperation></Cooperation>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Cooperation from "@/components/Cooperation.vue";
import RouterTitle from "@/components/RouterTitle.vue";
export default {
  name: "Purchase",
  components: {
    Header,
    Footer,
    Cooperation,
    RouterTitle
  }
};
</script>

<style>
</style>