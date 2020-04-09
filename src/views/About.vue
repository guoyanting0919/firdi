<template>
  <div class="about">
    <Header></Header>
    <router-view></router-view>
    <Cooperation></Cooperation>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Cooperation from "@/components/Cooperation.vue";

export default {
  name: "About",
  components: {
    Header,
    Footer,
    Cooperation
  }
};
</script>