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
                <router-link
                  class="detailItem"
                  v-for="(detail,index) in item.detail"
                  :key="index"
                  :to="{name:detail.pathName}"
                >{{detail.title}}</router-link>
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
              <router-link class="topListRouter" to="/">回首頁</router-link>
              <router-link class="topListRouter" to="/about/AboutFounder">網站導覽</router-link>
              <router-link class="topListRouter" to="/news/NewsActivity">Facebook</router-link>
              <router-link class="topListRouter" to="/iframe">聯絡本所</router-link>
              <router-link class="topListRouter" to="/serve">RSS</router-link>
              <!-- <li>English</li> -->
            </ul>
          </div>
          <div class="headerList">
            <ul class="headerBottomList">
              <li
                class="headerBottomListLi"
                @click="detailClickHandler(item)"
                v-for="(item,i) in menuData"
                :key="i"
              >{{item}}</li>
            </ul>
          </div>
        </div>

        <!-- headerListDetails -->
        <div class="headerListDetails" :class="{'headerListDetailsActive':itemIsHover}">
          <ul class="h-100">
            <router-link
              class="detailItem"
              v-for="(item, i ) in detailItems"
              :key="i"
              :to="{name:item.pathName}"
            >{{item.title}}</router-link>
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
        "同仁專區"
      ],
      resMenuData: [
        {
          title: "本所簡介",
          detail: [
            {
              title: "創辦人事項",
              pathName: "AboutFounder"
            }
          ]
        },
        {
          title: "最新消息",
          detail: [
            {
              title: "研討會及重要活動",
              pathName: "NewsActivity"
            }
          ]
        },
        {
          title: "服務項目",
          detail: [
            {
              title: "罐頭服務",
              pathName: "ServeCan"
            }
          ]
        },
        {
          title: "轉業合作",
          detail: [
            {
              title: "影音專區",
              pathName: "Iframe"
            }
          ]
        },
        {
          title: "產業知識庫",
          detail: [
            {
              title: "創辦人事項",
              pathName: "AboutFounder"
            }
          ]
        },
        {
          title: "教育訓練",
          detail: [
            {
              title: "創辦人事項",
              pathName: "AboutFounder"
            }
          ]
        },
        {
          title: "採購公告",
          detail: [
            {
              title: "採購公告",
              pathName: "Purchase"
            }
          ]
        },
        {
          title: "同仁專區",
          detail: [
            {
              title: "創辦人事項",
              pathName: "AboutFounder"
            }
          ]
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
        arr = [
          {
            title: "創辦人事項",
            pathName: "AboutFounder"
          }
        ];
      } else if (this.hoverItem === "最新消息") {
        arr = [
          {
            title: "研討會及重要活動",
            pathName: "NewsActivity"
          }
        ];
      } else if (this.hoverItem === "服務項目") {
        arr = [
          {
            title: "罐頭服務",
            pathName: "ServeCan"
          }
        ];
      } else if (this.hoverItem === "轉業合作") {
        arr = [
          {
            title: "影音專區",
            pathName: "Iframe"
          }
        ];
      } else if (this.hoverItem === "產業知識庫") {
        arr = [
          {
            title: "創辦人事項",
            pathName: "AboutFounder"
          }
        ];
      } else if (this.hoverItem === "教育訓練") {
        arr = [
          {
            title: "創辦人事項",
            pathName: "AboutFounder"
          }
        ];
      } else if (this.hoverItem === "採購公告") {
        arr = [
          {
            title: "採購公告",
            pathName: "Purchase"
          }
        ];
      } else if (this.hoverItem === "同仁專區") {
        arr = [
          {
            title: "創辦人事項",
            pathName: "AboutFounder"
          }
        ];
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