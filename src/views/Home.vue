<template>
  <div class="home">
    <Header></Header>
    <Banner></Banner>
    <SpecialReport></SpecialReport>
    <TecReport></TecReport>
    <Cooperation></Cooperation>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Banner from "@/components/Banner.vue";
import SpecialReport from "@/components/SpecialReport.vue";
import TecReport from "@/components/TecReport.vue";
import Cooperation from "@/components/Cooperation.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Banner,
    SpecialReport,
    TecReport,
    Cooperation
  }
};
</script>
