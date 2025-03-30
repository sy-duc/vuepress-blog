<template>
  <div class="row clearfix">
    <div class="section-heading text-center">
      <h2 class="section-title">{{ title }}</h2>
      <p class="section-subtitle">{{ summary }}</p>
    </div>

    <div class="col-3">
      <div class="section-heading">
        <img :src="image" :alt="title" />
        <a
          :href="link"
          class="button video link-lightbox"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ messages[currentLang].buttonLabel }} <i class="fa fa-play" aria-hidden="true"></i>
        </a>
      </div>
    </div>

    <div class="col-2-3">
      <div
        v-for="(technology, index) in technologies"
        :key="index"
        class="col-2 icon-block icon-top wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div class="icon-block-description">
          <h4>{{ technology.name }}</h4>
          <p>{{ technology.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { getLangFromPath } from "../../utils/helpers";
import { LANGUAGE } from "../../utils/constants";

const route = useRoute();

const props = defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  summary: { type: String, required: true },
  technologies: { type: Object, required: true },
  link: { type: String, required: true },
});

// Xác định ngôn ngữ hiện tại dựa vào đường dẫn
const currentLang = getLangFromPath(route.path);

const messages = {
  [LANGUAGE.EN]: {
    buttonLabel: "MORE DETAILS",
  },
  [LANGUAGE.VI]: {
    buttonLabel: "XEM CHI TIẾT",
  },
};
</script>

<style scoped>
.section-title {
  border-bottom: unset;
}

.theme-default-content h3:first-child {
  margin-bottom: unset;
}

.icon-block-description p {
  font-weight: 300;
}

.section-heading p:after {
  background: var(--vp-c-accent);
  content: "";
  display: block;
  width: 30px;
  height: 5px;
  margin: 30px auto 25px auto;
}

.section-heading h2:after {
  content: none;
}

.theme-default-content h2:first-child + p,
.theme-default-content h4:first-child + p {
  margin-top: unset;
}

.section-subtitle {
  font-size: 20px;
  font-weight: 300;
  color: var(--vp-c-text-gray);
}

.section-heading .button {
  float: right;
}

.row {
  padding: 50px 0;
}

a[target="_blank"]::after {
  content: none !important;
}
</style>
