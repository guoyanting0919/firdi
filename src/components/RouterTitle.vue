<template>
  <div class="routerTitle">
    <div class="titleContainer">
      <h2>{{routerTitle}} - {{secondaryTitle}}</h2>
      <div class="routerBreads">
        <span>
          <i class="fas fa-home mr-2"></i>
          首頁 > {{routerTitle}} > {{secondaryTitle}}
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