<template>
  <div class="NewsActivityHome">
    <Pagination></Pagination>
    <div class="newsList">
      <h4 class="title">
        <i class="mr-2 far fa-calendar"></i>其他
      </h4>
      <ul>
        <li>
          <div class="newsDate">2019/10/30</div>
          <router-link to="/news/NewsElse/123">
            <div class="newsTitle">預見商機─2019年臺灣銀髮餐食產業鏈結發展研討會</div>
          </router-link>
        </li>
        <li>
          <div class="newsDate">2019/10/30</div>
          <div class="newsTitle">預見商機─2019年臺灣銀髮餐食產業鏈結餐食產業鏈結餐食產業鏈結餐食產業鏈結餐食產業鏈結餐食產業鏈結發展研討會</div>
        </li>
        <li>
          <div class="newsDate">2019/10/30</div>
          <div class="newsTitle">預見商機─2019年臺灣銀髮餐食產業鏈結銀髮餐食產業鏈結發展研討會發展研討會</div>
        </li>
        <li>
          <div class="newsDate">2019/10/30</div>
          <div class="newsTitle">預見商機─2019年臺灣結發展研討會</div>
        </li>
        <li>
          <div class="newsDate">2019/10/30</div>
          <div class="newsTitle">預見019年臺灣銀髮餐食產業鏈結發展研討會商機─2019年臺灣銀髮餐食產業鏈結發展研討會</div>
        </li>
        <li>
          <div class="newsDate">2019/10/30</div>
          <div class="newsTitle">預見商機─2</div>
        </li>
        <li>
          <div class="newsDate">2019/10/30</div>
          <div class="newsTitle">預見商機─2019年臺灣銀髮餐展研討會</div>
        </li>
        <li>
          <div class="newsDate">2019/10/30</div>
          <div class="newsTitle">預見商機─2019年臺灣</div>
        </li>
        <li>
          <div class="newsDate">2019/10/30</div>
          <div class="newsTitle">預見商機─2019年臺灣銀髮銀髮餐食產業鏈結發展研討會銀髮餐食產業鏈結發展研討會餐食產業鏈結發展研討會</div>
        </li>
      </ul>
    </div>

    <Pagination style="
    display: flex;
    justify-content: flex-end;"></Pagination>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
export default {
  components: {
    Pagination
  }
};
</script>

<style>
</style>