<template>
  <!--New Post Gallery-->
  <NewPostGallery />
  <!--End of New Post Gallery-->

  <!--List Posts-->
  <aside
    v-for="(categorizedPost, index) in categorizedPosts"
    :key="categorizedPost.category"
    id="testimonials"
    class="scrollto text-center"
    data-enllax-ratio=".2"
  >
    <div class="row clearfix">
      <div class="section-heading">
        <h3 v-if="index === 0">{{ messages[currentLang].title }}</h3>
        <h2 class="section-title">{{ categorizedPost.category }}</h2>
      </div>

      <PostCard
        v-for="post in categorizedPost.posts"
        :key="post.path"
        :title="post.title"
        :summary="post.summary"
        :link="post.path"
        :image="post.image"
      />
    </div>
  </aside>
  <!--End of List Posts-->
</template>

<script setup>
import { categorizedPosts } from '@temp/posts.js'
import { useRoute } from "vue-router";
import { getLangFromPath } from "../../utils/helpers";
import { LANGUAGE } from "../../utils/constants.js";

const route = useRoute();

// Xác định ngôn ngữ hiện tại dựa vào đường dẫn
const currentLang = getLangFromPath(route.path);

const messages = {
  "en-US": {
    title: "POSTS BY CATEGORY",
  },
  "vi-VN": {
    title: "BÀI VIẾT THEO DANH MỤC",
  },
};
</script>

<style scoped>
h2 {
  border-bottom: unset;
}

.row {
  padding: 25px 0 0 0;
}
</style>
