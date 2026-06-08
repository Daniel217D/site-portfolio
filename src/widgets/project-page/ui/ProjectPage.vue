<script setup lang="ts">
import type { Project } from '~/entities/project'

defineProps<{
  project: Project
}>()
</script>

<template>
  <main class="page-shell">
    <section class="section">
      <div class="container">
        <NuxtLink class="eyebrow" to="/p">
          Projects
        </NuxtLink>
        <h1 class="headline">
          {{ project.title }}
        </h1>
        <p class="lead">
          {{ project.summary }}
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container project-layout">
        <article>
          <p class="eyebrow">
            Overview
          </p>
          <h2>Alpha project page</h2>
          <p>
            This page is the first static implementation of the project template. It keeps the simple text description in the page flow and reserves dedicated sections for an embedded presentation and demo.
          </p>
        </article>

        <slot name="presentation" />
        <slot name="demo" />
      </div>
    </section>
  </main>
</template>

<style scoped>
.project-layout {
  display: grid;
  gap: 24px;
}

article {
  max-width: 760px;
}

h2 {
  margin: 0 0 12px;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
}

p {
  color: var(--color-muted);
  line-height: 1.65;
}
</style>

