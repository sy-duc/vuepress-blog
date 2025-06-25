<template>
  <!--New Post Gallery-->
  <NewPostGallery />
  <!--End of New Post Gallery-->

  <!--List Posts-->
  <template v-if="!currentTag">
    <aside
      v-for="(categorizedPost, index) in categorizedBlogPosts"
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
  </template>
  <template v-else>
    <aside
      id="testimonials"
      class="scrollto text-center"
      data-enllax-ratio=".2"
    >
      <div class="row clearfix">
        <div class="section-heading">
          <h3>{{ messages[currentLang].filterTitle }}</h3>
          <h2 class="section-title">{{ `${messages[currentLang].filterTag}: ${currentTag.toUpperCase()}` }}</h2>
        </div>

        <template v-if="filteredPosts.length === 0">
          <div><p>{{ messages[currentLang].emptFilter }}</p></div>
        </template>
        <template v-else>
          <PostCard
            v-for="post in filteredPosts"
            :key="post.path"
            :title="post.title"
            :summary="post.summary"
            :link="post.path"
            :image="post.image"
          />
        </template>
      </div>
    </aside>
  </template>
  <!--End of List Posts-->
</template>

<script setup>
import { computed } from 'vue';
import { categorizedBlogPosts } from '@temp/blogPosts.js'
import { useRoute } from "vue-router";
import { getLangFromPath } from "../../utils/helpers";
import { LANGUAGE } from "../../utils/constants";
import PostCard from "../card/PostCard.vue";
import NewPostGallery from "./NewPostGallery.vue";

const route = useRoute();
const currentTag = computed(() => route.query.tag?.toString() || '');

// Lọc các bài viết theo thẻ nếu có
const filteredPosts = computed(() => {
  if (!currentTag.value) return [];

  // Lọc theo tag và gộp lại thành một mảng phẳng
  return categorizedBlogPosts.flatMap(category =>
    category.posts.filter(post =>
      post.tags?.includes(currentTag.value)
    )
  );
});

// Xác định ngôn ngữ hiện tại dựa vào đường dẫn
const currentLang = getLangFromPath(route.path);

const messages = {
  [LANGUAGE.EN]: {
    title: "POSTS BY CATEGORY",
    filterTitle: "POSTS BY TAG",
    filterTag: "TAG",
    emptFilter: "Opps! No posts found related to this tag."

  },
  [LANGUAGE.VI]: {
    title: "BÀI VIẾT THEO DANH MỤC",
    filterTitle: "BÀI VIẾT THEO TỪ KHÓA",
    filterTag: "TỪ KHÓA",
    emptFilter: "Opps! Không tìm thấy bài viết nào liên quan."
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
