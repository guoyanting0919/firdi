<template>
  <div class="routerTitle">
    <div class="titleContainer">
      <h2>
        {{routerTitle}}
        <span v-if="secondaryTitle">-</span>
        {{secondaryTitle}}
      </h2>
      <div class="routerBreads">
        <span>
          <i class="fas fa-home mr-2"></i>
          <router-link class="homeLink mr-1" to="/">首頁</router-link>>
          <span class="homeLink mr-1">{{routerTitle}}</span>

          <router-link
            v-if="secondaryTitle"
            :to="{name:routerTitlePath}"
            class="homeLink"
          >> {{secondaryTitle}}</router-link>
        </span>
      </div>
    </div>
    <ContactIcon></ContactIcon>
  </div>
</template>

<script>
import ContactIcon from "@/components/ContactIcon.vue";
export default {
  props: {
    routerTitle: {
      type: String,
      required: false
    },
    routerTitlePath: {
      type: String,
      required: false
    },
    secondaryTitle: {
      type: String,
      required: false
    }
  },
  components: {
    ContactIcon
  }
};
</script>

<style>
</style>