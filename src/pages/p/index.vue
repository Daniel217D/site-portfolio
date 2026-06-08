<script setup lang="ts">
import { projects } from '~/entities/project'

useSeoMeta({
  title: 'Projects | Portfolio ML Showcase',
  description: 'Catalog of ML portfolio projects.'
})
</script>

<template>
  <main class="page-shell">
    <section class="section">
      <div class="container">
        <p class="eyebrow">
          Catalog
        </p>
        <h1 class="headline">
          Projects
        </h1>
        <p class="lead">
          A compact catalog of ML work prepared for project write-ups, embedded presentations, and interactive demo blocks.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container grid">
        <NuxtLink
          v-for="project in projects"
          :key="project.project_name"
          class="project-card"
          :to="`/p/${project.project_name}`"
        >
          <h2>{{ project.title }}</h2>
          <p>{{ project.summary }}</p>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

