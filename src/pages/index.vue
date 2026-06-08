<script setup lang="ts">
import { projects } from '~/entities/project'

useSeoMeta({
  title: 'Portfolio ML Showcase',
  description: 'Static portfolio for ML projects, presentations, and demos.'
})
</script>

<template>
  <main class="page-shell">
    <section class="section">
      <div class="container">
        <p class="eyebrow">
          Portfolio ML Showcase
        </p>
        <h1 class="headline">
          ML projects with readable context and hands-on demos.
        </h1>
        <p class="lead">
          Static portfolio for project pages, Reveal.js presentations, and client-side demo integrations with external ML APIs.
        </p>
        <div class="link-row">
          <NuxtLink class="button-link" to="/p">
            View projects
          </NuxtLink>
          <a class="button-link secondary" href="https://revealjs.com/" target="_blank" rel="noreferrer">
            Reveal.js
          </a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="eyebrow">
          Alpha catalog
        </p>
        <div class="grid">
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
      </div>
    </section>
  </main>
</template>

