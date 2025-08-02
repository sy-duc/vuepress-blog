<template>
  <div class="poster-carousel">
    <div class="carousel-container">
      <div
        class="carousel-track"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          class="carousel-item"
          v-for="(poster, index) in posters"
          :key="index"
        >
          <component
            is="RouterLink"
            :to="poster.to"
          >
            <img :src="poster.image" :alt="poster.title" class="poster-image" />
          </component>
        </div>
      </div>

      <!-- Navigation buttons -->
      <div class="nav-controls">
        <button class="circle-button" @click="handlePrevClick">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="circle-button" @click="handleNextClick">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const posters = [
  {
    image: "/vuepress-blog/images/posters/aws-training-saa.png",
    title: "AWS Certified Solutions Architect – Associate",
    to: "/blog-posts/hidden/aws-training-saa-series.html",
  },
  {
    image: "/vuepress-blog/images/posters/plsql-training-series.png",
    title: "PL/SQL Training Series",
    to: "/blog-posts/hidden/plsql-training-series.html",
  },
];

// Thời gian tự chuyển poster (ms)
const autoSlideInterval = 10000;

const currentIndex = ref(0);
let slideTimer = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % posters.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + posters.length) % posters.length;
};

const clearAutoSlide = () => {
  if (slideTimer) {
    clearInterval(slideTimer);
    slideTimer = null;
  }
};

const startAutoSlide = () => {
  clearAutoSlide();
  slideTimer = setInterval(nextSlide, autoSlideInterval);
};

const handleNextClick = () => {
  nextSlide();
  startAutoSlide(); // reset timer
};

const handlePrevClick = () => {
  prevSlide();
  startAutoSlide(); // reset timer
};

onMounted(() => {
  startAutoSlide();
});

onBeforeUnmount(() => {
  clearAutoSlide();
});
</script>

<style scoped>
.poster-carousel {
  width: 100%;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.carousel-container {
  position: relative;
  max-width: 1165px;
  margin: auto;
  overflow: hidden;
  border-radius: 10px;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

.carousel-item {
  min-width: 100%;
  box-sizing: border-box;
  text-align: center;
  position: relative;
}

.poster-image {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
}

.poster-title {
  position: absolute;
  bottom: 50px;
  left: 20px;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: bold;
}

.nav-controls {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
  z-index: 2;
}

.circle-button {
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s;
}

.circle-button:hover {
  background: rgba(0, 0, 0, 0.8);
}

.medium-zoom-image {
  cursor: pointer;
}
</style>
