<template>
  <div class="banner">
    <span class="moreReport">
      <i class="fas fa-arrow-right mr-2"></i>More 更多消息
    </span>
    <div class="container-fluid p-0 h-100">
      <div class="row h-100 w-100 bannerRow">
        <div class="col-12 col-lg-5 h-100 bannerIframe">
          <iframe
            class="bannerIframeSize"
            src="https://www.youtube.com/embed/9kx5dInrYWs"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="col-12 col-lg-7 h-100 bannerTxt">
          <div class="bannerTxtTitle w-100">
            <h5
              @click="bannerActiveHandler('研討會及重要活動')"
              class="m-0 bannerTitle"
              :class="{'activeBannerTitle':activeBanner==='研討會及重要活動'}"
            >研討會及重要活動</h5>
            <h5
              @click="bannerActiveHandler('最新服務與訓練')"
              :class="{'activeBannerTitle':activeBanner==='最新服務與訓練'}"
              class="m-0 bannerTitle"
            >最新服務與訓練</h5>
            <h5
              @click="bannerActiveHandler('其他')"
              :class="{'activeBannerTitle':activeBanner==='其他'}"
              class="m-0"
            >其他</h5>
          </div>
          <div class="bannerTxtDetail w-100">
            <span class="resMoreReport">More 更多消息</span>
            <ul class="w-100 p-0 detailResMb">
              <li class="w-100 p-0">
                <p class="bannerDate w-30">2019-07-22</p>
                <p class="wid70">最新服務與訓練最新服務與訓練</p>
              </li>
              <li class="w-100 p-0">
                <p class="bannerDate">2019-07-22</p>
                <p class="wid70">最新服務與訓練最最新服務與訓練最新服務與訓練新服務與訓練</p>
              </li>
              <li class="w-100 p-0">
                <p class="bannerDate">2019-07-22</p>
                <p class="wid70">最新服務與訓練最新服務與訓練</p>
              </li>
              <li class="w-100 p-0">
                <p class="bannerDate">2019-07-22</p>
                <p class="wid70">最新服務與訓練最新服務與訓練</p>
              </li>
              <li class="w-100 p-0">
                <p class="bannerDate">2019-07-22</p>
                <p class="wid70">最新服務與訓練最新服務與訓練</p>
              </li>
              <li class="w-100 p-0">
                <p class="bannerDate">2019-07-22</p>
                <p class="wid70">最新服務與訓練最新服務與訓練</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeBanner: "研討會及重要活動",
      data: ""
    };
  },
  methods: {
    bannerActiveHandler(str) {
      this.activeBanner = str;
    }
  }
};
</script>

<style>
</style>