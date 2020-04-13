<template>
  <div class="contactIcon">
    <div class="contactContainer">
      <div class="iconGroup">
        <i class="fab fa-facebook"></i>
        <i class="fab fa-twitter-square"></i>
        <i class="fas fa-share-alt"></i>
      </div>
      <div class="prePage" @click="$router.go(-1)">
        <i class="fas fa-arrow-right"></i>回上一頁
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>