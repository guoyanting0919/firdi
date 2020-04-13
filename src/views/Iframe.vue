<template>
  <div class="iframe">
    <Header></Header>
    <RouterTitle :routerTitle="'影音專區'"></RouterTitle>
    <Pagination></Pagination>
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6">
          <iframe
            class="w-100 h-100"
            src="https://www.youtube.com/embed/9kx5dInrYWs"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h5 class="iframeTitle">2019 愛送偏鄉食際行動</h5>
        </div>
        <div class="col-12 col-lg-6">
          <iframe
            class="w-100 h-100"
            src="https://www.youtube.com/embed/9kx5dInrYWs"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h5 class="iframeTitle">2019 愛送偏鄉食際行動</h5>
        </div>
        <div class="col-12 col-lg-6">
          <iframe
            class="w-100 h-100"
            src="https://www.youtube.com/embed/9kx5dInrYWs"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h5 class="iframeTitle">2019 愛送偏鄉食際行動</h5>
        </div>
        <div class="col-12 col-lg-6">
          <iframe
            class="w-100 h-100"
            src="https://www.youtube.com/embed/9kx5dInrYWs"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h5 class="iframeTitle">2019 愛送偏鄉食際行動</h5>
        </div>
      </div>
    </div>
    <Pagination style="
    display: flex;
    justify-content: flex-end;"></Pagination>
    <Cooperation></Cooperation>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Cooperation from "@/components/Cooperation.vue";
import RouterTitle from "@/components/RouterTitle.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "Iframe",
  components: {
    Header,
    Footer,
    Cooperation,
    RouterTitle,
    Pagination
  }
};
</script>

<style>
</style>