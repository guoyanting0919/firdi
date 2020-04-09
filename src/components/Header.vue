<template>
  <div class="headerContainer">
    <div class="header container-fluid">
      <div class="row h-100" style="position: relative;">
        <!-- resBar -->
        <div class="resBar">
          <i @click="activeList=!activeList" class="fas fa-bars"></i>
        </div>

        <!-- resMenu -->
        <div class="resMenu" :class="{'activeList':activeList}">
          <ul class="resList">
            <li
              class="resListItem"
              @click="menuDetailActiveBtn(item.title)"
              v-for="(item,index) in resMenuData"
              :key="index"
            >
              <div class="w-100 listItem">
                <p :class="{'textBlue':menuDetailActive===item.title}">{{item.title}}</p>
                <i class="fas fa-chevron-down" style="width: 17px;"></i>
              </div>
              <ul
                class="w-100 menuDetail"
                :class="{'menuDetailActive':menuDetailActive===item.title}"
              >
                <li class="detailItem" v-for="(detail,index) in item.detail" :key="index">{{detail}}</li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- Menu -->
        <div class="col-12 col-lg-4 logoPosition">
          <div class="logo"></div>
        </div>
        <div class="col-lg-8 p-0 lgMenu">
          <div class="headerList">
            <ul class="headerTopList">
              <!-- <li>回首頁</li> -->
              <router-link to="/">回首頁</router-link>
              <router-link to="/about">網站導覽</router-link>
              <!-- <li>網站導覽</li> -->
              <li>Facebook</li>
              <li>聯絡本所</li>
              <li>RSS</li>
              <li>English</li>
            </ul>
          </div>
          <div class="headerList">
            <ul class="headerBottomList">
              <li @click="detailClickHandler(item)" v-for="(item,i) in menuData" :key="i">{{item}}</li>
            </ul>
          </div>
        </div>

        <!-- headerListDetails -->
        <div class="headerListDetails" :class="{'headerListDetailsActive':itemIsHover}">
          <ul class="h-100">
            <li v-for="(item, i ) in detailItems" :key="i">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuData: [
        "本所簡介",
        "最新消息",
        "服務項目",
        "轉業合作",
        "產業知識庫",
        "教育訓練",
        "採購公告",
        "最新消息"
      ],
      resMenuData: [
        {
          title: "本所簡介",
          detail: ["本所簡介", "本所簡介", "本所簡介", "本所簡介"]
        },
        {
          title: "最新消息",
          detail: ["最新消息", "最新消息", "最新消息", "最新消息"]
        },
        {
          title: "產業知識庫",
          detail: ["產業知識庫", "產業知識庫", "產業知識庫", "產業知識庫"]
        },
        {
          title: "轉業合作",
          detail: ["轉業合作", "轉業合作", "轉業合作", "轉業合作"]
        },
        {
          title: "服務項目",
          detail: ["服務項目", "服務項目", "服務項目", "服務項目"]
        },
        {
          title: "教育訓練",
          detail: ["教育訓練", "教育訓練", "教育訓練", "教育訓練"]
        },
        {
          title: "採購公告",
          detail: ["採購公告", "採購公告", "採購公告", "採購公告"]
        }
      ],
      activeList: false,
      menuDetailActive: "",
      hoverItem: "",
      itemIsHover: false
    };
  },
  computed: {
    detailItems() {
      let arr = [];
      if (!this.hoverItem) {
        arr = [];
      } else if (this.hoverItem === "本所簡介") {
        arr = ["本所簡介", "本所簡介", "本所簡介", "本所簡介", "本所簡介"];
      } else if (this.hoverItem === "最新消息") {
        arr = ["最新消息", "最新消息", "最新消息"];
      } else if (this.hoverItem === "服務項目") {
        arr = ["服務項目", "服務項目", "服務項目", "服務項目"];
      } else if (this.hoverItem === "轉業合作") {
        arr = [
          "轉業合作",
          "轉業合作",
          "轉業合作",
          "轉業合作",
          "轉業合作",
          "轉業合作"
        ];
      } else if (this.hoverItem === "產業知識庫") {
        arr = [
          "產業知識庫",
          "產業知識庫",
          "產業知識庫",
          "產業知識庫",
          "產業知識庫"
        ];
      } else if (this.hoverItem === "教育訓練") {
        arr = ["教育訓練", "教育訓練", "教育訓練", "教育訓練"];
      } else if (this.hoverItem === "採購公告") {
        arr = ["採購公告", "採購公告", "採購公告", "採購公告", "採購公告"];
      } else if (this.hoverItem === "同仁專區") {
        arr = ["同仁專區", "同仁專區", "同仁專區"];
      }
      return arr;
    }
  },
  methods: {
    menuDetailActiveBtn(str) {
      if (this.menuDetailActive === str) {
        this.menuDetailActive = "";
      } else {
        this.menuDetailActive = str;
      }
    },
    detailClickHandler(item) {
      if (this.hoverItem === item) {
        this.itemIsHover = false;
        this.hoverItem = "";
      } else {
        this.hoverItem = item;
        this.itemIsHover = true;
      }
    }
  }
};
</script>

<style>
</style>