<template>
  <main id="content">
    <section id="about" class="introduction scrollto">
      <ProjectCard
        v-for="(project, index) in projectPosts"
        :key="index"
        :title="project.title"
        :summary="project.summary"
        :link="project.link"
        :image="project.image"
        :technologies="project.technologies"
      />
    </section>
  </main>
</template>

<script setup>
import { projectPosts } from '@temp/projectPosts.js'
</script>

<style scoped></style>
