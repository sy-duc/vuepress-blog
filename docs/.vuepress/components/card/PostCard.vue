<template>
  <RouterLink :to="link">
    <blockquote class="col-3 testimonial classic">
      <img :src="image" :alt="title" @click.stop />
      <q>{{ summary }}</q>
      <footer>{{ title }}</footer>
    </blockquote>
  </RouterLink>
</template>

<script setup>
const props = defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  summary: { type: String, required: true },
  link: { type: String, required: true },
});
</script>

<style scoped>
blockquote {
  border-inline-start: unset;
}

img {
  cursor: pointer;
}

q {
  min-height: 68px;
}

footer :hover {
  text-decoration: underline;
}
</style>
