<template>
  <header id="banner" class="scrollto clearfix" data-enllax-ratio=".5">
    <!--Banner Content-->
    <div id="banner-content" class="row clearfix">
      <div class="col-38">
        <div class="section-heading">
          <h1>{{ messages[currentLang].title }}</h1>
          <h2>{{ messages[currentLang].welcome }}</h2>
        </div>

        <!--Call to Action-->
        <a href="#" class="button">{{ messages[currentLang].action }}</a>
        <!--End Call to Action-->
      </div>
    </div>
    <!--End of Row-->
  </header>
</template>

<script setup>
import { useRoute } from "vue-router";
import { getLangFromPath } from "../../utils/helpers";

const route = useRoute();

const messages = {
  "en-US": {
    title: "Hi, I'm Duc - Web Developer",
    welcome:
      "This is my personal GitHub Page site, created to introduce myself. It also serves as a place to note knowledge documents for work purposes!",
    action: "ABOUT ME",
  },
  "vi-VN": {
    title: "Hi, tôi là S. Đức - một Web Developer",
    welcome:
      "Đây là trang GitHub Page cá nhân, với mục đích giới thiệu bản thân. Đồng thời cũng là nơi ghi chép các tài liệu kiến thức phục vụ công việc!",
    action: "VỀ TÔI",
  },
};

// Xác định ngôn ngữ hiện tại dựa vào đường dẫn
const currentLang = getLangFromPath(route.path);
</script>

<style scoped>
.theme-default-content h1:first-child {
  margin-bottom: unset;
}

.theme-default-content h1 {
  margin-top: unset;
}

.theme-default-content h2 {
  margin-top: unset;
  padding-top: unset;
}

h2 {
  border-bottom: unset;
}

.theme-default-content a:not(.header-anchor) {
  text-decoration: unset;
}
</style>
