<template>
  <div class="serveCan">
    <RouterTitle :routerTitle="'服務項目'" :secondaryTitle="'罐頭服務'"></RouterTitle>
    <div class="serveCanContainer">
      <ul class="serveBox mt-2">
        <h4 class="serveTitle">
          <i class="mr-2 fas fa-file"></i>技術服務委託單-罐頭專用
        </h4>
        <div class="p-2">
          <li class="serveItem">
            <a class="downloadBtn">
              <i class="mr-1 fas fa-cloud-download-alt"></i>Download
            </a>
            <span class="fileName">技術服務委託單-罐頭專用</span>
          </li>
        </div>
      </ul>
      <ul class="serveBox">
        <h4 class="serveTitle">
          <i class="mr-2 fas fa-file"></i>申請殺菌釜設備測定相關表單
        </h4>
        <div class="p-2">
          <li class="serveItem">
            <a class="downloadBtn">
              <i class="mr-1 fas fa-cloud-download-alt"></i>Download
            </a>
            <span class="fileName">(附件一)殺菌釜熱分佈</span>
          </li>
          <li class="serveItem">
            <a class="downloadBtn">
              <i class="mr-1 fas fa-cloud-download-alt"></i>Download
            </a>
            <span class="fileName">(附件二)低酸性罐頭工作準備記錄表(殺菌釜)</span>
          </li>
          <li class="serveItem">
            <a class="downloadBtn">
              <i class="mr-1 fas fa-cloud-download-alt"></i>Download
            </a>
            <span class="fileName">(附件三)酸化罐頭食品工作準備記錄表(殺菌釜)</span>
          </li>
        </div>
      </ul>
      <ul class="serveBox">
        <h4 class="serveTitle">
          <i class="mr-2 fas fa-file"></i>申請殺菌釜設備校正及報告相關說明
        </h4>
        <div class="p-2">
          <li class="serveItem">
            <a class="downloadBtn">
              <i class="mr-1 fas fa-cloud-download-alt"></i>Download
            </a>
            <span class="fileName">(附件四)殺菌釜用溫度計壓力錶校正</span>
          </li>
          <li class="serveItem">
            <a class="downloadBtn">
              <i class="mr-1 fas fa-cloud-download-alt"></i>Download
            </a>
            <span class="fileName">(附件五)殺菌條件報告品名變更新增流程須知</span>
          </li>
        </div>
      </ul>
      <ul class="serveBox">
        <h4 class="serveTitle">
          <i class="mr-2 fas fa-file"></i>申請連續式開放設備測定相關表單
        </h4>
        <div class="p-2">
          <li class="serveItem">
            <a class="downloadBtn">
              <i class="mr-1 fas fa-cloud-download-alt"></i>Download
            </a>
            <span class="fileName">(附件六)酸化罐頭食品工作準備記錄表(連續式開放設備)</span>
          </li>
        </div>
      </ul>
      <ul class="serveBox">
        <h4 class="serveTitle">
          <i class="mr-2 fas fa-file"></i>申請無菌加工及包裝系統(含熱充填系統)設備測定相關表單
        </h4>
        <div class="p-2">
          <li class="serveItem">
            <a class="downloadBtn">
              <i class="mr-1 fas fa-cloud-download-alt"></i>Download
            </a>
            <span class="fileName">(附件七)低酸性產品工作準備記錄表(無菌加工及包裝系統(含熱充填))</span>
          </li>
          <li class="serveItem">
            <a class="downloadBtn">
              <i class="mr-1 fas fa-cloud-download-alt"></i>Download
            </a>
            <span class="fileName">(附件八)酸化產品工作準備記錄表(無菌加工及包裝系統(含熱充填))</span>
          </li>
          <li class="serveItem">
            <a class="downloadBtn">
              <i class="mr-1 fas fa-cloud-download-alt"></i>Download
            </a>
            <span class="fileName">(附件九)線上溫度計比對</span>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import RouterTitle from "@/components/RouterTitle.vue";
export default {
  name: "ServeCan",
  components: {
    RouterTitle
  }
};
</script>

<style>
</style>