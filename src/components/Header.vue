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
                  @click.native="activeList=false"
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
          <!-- <div class="logo"></div> -->
          <router-link to="/" class="logo"></router-link>
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
                @click="detailClickHandler(item.title)"
                v-for="(item,i) in resMenuData"
                :key="i"
              >
                {{item.title}}
                <ul class="childMenu" :class="{'childMenuActive':hoverItem===item.title}">
                  <router-link
                    :to="{name:child.pathName}"
                    class="childList"
                    v-for="(child,i) in item.detail"
                    :key="i"
                  >{{child.title}}</router-link>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <!-- headerListDetails -->
        <!-- <div class="headerListDetails" :class="{'headerListDetailsActive':itemIsHover}">
          <ul class="h-100">
            <router-link
              class="detailItem"
              v-for="(item, i ) in detailItems"
              :key="i"
              :to="{name:item.pathName}"
            >{{item.title}}</router-link>
          </ul>
        </div>-->
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
            },
            {
              title: "董事長簡歷",
              pathName: "AboutChairman"
            },
            {
              title: "沿革",
              pathName: "AboutHistory"
            },
            {
              title: "宗旨",
              pathName: "AboutPurpose"
            },
            {
              title: "專業成就",
              pathName: "AboutAchievement"
            },
            {
              title: "組織架構",
              pathName: "AboutOrganization"
            },
            {
              title: "組織架構圖",
              pathName: "AboutOrganizationImg"
            },
            {
              title: "位置圖",
              pathName: "AboutPosition"
            },
            {
              title: "平面圖",
              pathName: "AboutFloor"
            },
            {
              title: "工作年報",
              pathName: "AboutWorkReport"
            },
            {
              title: "財務報表",
              pathName: "AboutFinancial"
            }
          ]
        },
        {
          title: "最新消息",
          detail: [
            {
              title: "研討會及重要活動",
              pathName: "NewsActivityHome"
            },
            {
              title: "最新服務與訓練",
              pathName: "NewsTrainingHome"
            },
            {
              title: "其他",
              pathName: "NewsElseHome"
            }
          ]
        },
        {
          title: "服務項目",
          detail: [
            {
              title: "專利寄存",
              pathName: "ServePatent"
            },
            {
              title: "委託服務",
              pathName: "ServeDelegate"
            },
            {
              title: "罐頭服務",
              pathName: "ServeCan"
            },
            {
              title: "驗證服務",
              pathName: "ServeVerification"
            },
            {
              title: "服務手冊",
              pathName: "ServeManual"
            },
            {
              title: "開放實驗室",
              pathName: "ServeLaboratory"
            },
            {
              title: "品質控管",
              pathName: "ServeQuality"
            },
            {
              title: "本所出版品",
              pathName: "ServePublishing"
            },
            {
              title: "運作之毒性化學物",
              pathName: "ServePoison"
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
              pathName: "PurchaseHome"
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
            pathName: "PurchaseHome"
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