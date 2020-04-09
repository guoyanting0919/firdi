<template>
  <div class="tecReport container-fluid mt-5 p-0">
    <div class="row w-100 m-0">
      <div class="col-12 col-lg-7 p-0">
        <div class="title">
          <h3>
            產業與科技報導
            <span>Industry and Technology Report</span>
          </h3>
        </div>
        <div class="resTecMenu">
          <button
            class="w-100 tecCollapse mt-3"
            type="button"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >科技新知</button>
          <div class="collapse" id="collapseExample">
            <div class="card card-body card-body1 w-100">
              <ul>
                <li>科技新知科技新知</li>
                <li>科技新知科技新知科技新知</li>
                <li>科技新知</li>
                <li>科技新知科技新知</li>
                <li>科技新知</li>
              </ul>
            </div>
          </div>
          <button
            class="w-100 tecCollapse"
            type="button"
            data-toggle="collapse"
            data-target="#collapseExample1"
            aria-expanded="false"
            aria-controls="collapseExample"
          >產業評析</button>
          <div class="collapse" id="collapseExample1">
            <div class="card card-body card-body2 w-100">
              <ul>
                <li>科技新知科技新知</li>
                <li>科技新知科技新知科技新知</li>
                <li>科技新知</li>
                <li>科技新知科技新知</li>
                <li>科技新知</li>
              </ul>
            </div>
          </div>
          <button
            class="w-100 tecCollapse"
            type="button"
            data-toggle="collapse"
            data-target="#collapseExample2"
            aria-expanded="false"
            aria-controls="collapseExample"
          >產業速報</button>
          <div class="collapse" id="collapseExample2">
            <div class="card card-body card-body3 w-100">
              <ul>
                <li>科技新知科技新知</li>
                <li>科技新知科技新知科技新知</li>
                <li>科技新知</li>
                <li>科技新知科技新知</li>
                <li>科技新知</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row w-100 pRow20">
          <div class="col-4 tecBtns p-0">
            <button
              @click="activeTecHandler('科技新知')"
              class="tecBtn"
              :class="{'activeTecBtn': activeTec==='科技新知'}"
            >科技新知</button>
            <button
              @click="activeTecHandler('產業評析')"
              class="tecBtn"
              :class="{'activeTecBtn': activeTec==='產業評析'}"
            >產業評析</button>
            <button
              @click="activeTecHandler('產業速報')"
              class="tecBtn"
              :class="{'activeTecBtn': activeTec==='產業速報'}"
            >產業速報</button>
          </div>
          <div class="col-8">
            <ul class="tecLists">
              <li>糧食殺手:認識秋行軍蟲</li>
              <li>食材性胜肽載體強化礦物質的吸收</li>
              <li>德國洋甘菊保護神經元細胞受損及增加記憶力</li>
              <li>生物墨水結合3D列印器官的大突破</li>
              <li>國際上具代表性之微生物可安全使用清單比較與現況</li>
            </ul>
          </div>
        </div>
        <div class="picContainer">
          <button class="nextBtn" @click="nextHandler">
            <i class="fas fa-chevron-right"></i>
          </button>
          <button class="preBtn" @click="preHandler">
            <i class="fas fa-chevron-left"></i>
          </button>
          <div ref="innerWidth" style="display: flex; overflow: hidden;">
            <div class="picWrap" ref="picWrap">
              <div class="circlePic">
                <div class="circlePicBg">生物資源保存及研究中心</div>
              </div>
              <div class="circlePic">
                <div class="circlePicBg">生物資源保存及研究中心</div>
              </div>
              <div class="circlePic">
                <div class="circlePicBg">生物資源保存及研究中心</div>
              </div>
              <div class="circlePic">
                <div class="circlePicBg">生物資源保存及研究中心</div>
              </div>
              <div class="circlePic">
                <div class="circlePicBg">生物資源保存及研究中心</div>
              </div>
              <div class="circlePic">
                <div class="circlePicBg">生物資源保存及研究中心</div>
              </div>
              <div class="circlePic">
                <div class="circlePicBg">生物資源保存及研究中心</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-5 p-0 activitySection">
        <div class="activeTitle">
          <h3>活動花絮</h3>
        </div>
        <div class="activityPicGroup mt-4">
          <div id="carouselExampleIndicators" class="carousel slide h-100" data-ride="false">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner h-100">
              <div class="carousel-item active h-100">
                <img src="../assets/image/bannerBg.png" class="d-block w-100 h-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>...</h5>
                  <p>...</p>
                </div>
              </div>
              <div class="carousel-item h-100">
                <img src="../assets/image/bannerBg.png" class="d-block w-100 h-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>...</h5>
                  <p>...</p>
                </div>
              </div>
              <div class="carousel-item h-100">
                <img src="../assets/image/bannerBg.png" class="d-block w-100 h-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>...</h5>
                  <p>...</p>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slick from "slick-carousel";
import $ from "jquery";
export default {
  mounted() {
    $(".slider").slick({
      dots: true
    });
  },
  data() {
    return {
      activeTec: "科技新知",
      circleSlider: 0,
      nextDisable: false,
      num: ""
    };
  },
  computed: {
    circleSliderMaxWidth() {
      return this.$refs.picWrap.clientWidth;
    },
    inner() {
      return this.$refs.innerWidth.clientWidth;
    }
  },
  methods: {
    activeTecHandler(str) {
      this.activeTec = str;
    },
    nextHandler() {
      let position = this.inner;
      this.num = Number.parseInt(this.num + position);
      if (this.circleSliderMaxWidth > this.num) {
        this.circleSlider = this.circleSlider - position;
        this.$refs.picWrap.style.transform = `translateX(${this.circleSlider}px)`;
      } else {
        console.log("max");
        this.num = Number.parseInt(this.num - position);
      }
    },
    preHandler() {
      let position = this.inner;
      if (this.circleSlider < 0) {
        this.num = Number.parseInt(this.num - position);
        this.circleSlider = this.circleSlider + position;
        this.$refs.picWrap.style.transform = `translateX(${this.circleSlider}px)`;
      } else {
        this.num = 0;
      }
    }
  }
};
</script>

<style>
</style>