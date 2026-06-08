<script setup lang="ts">
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/white.css'

import type { Project } from '~/entities/project'

const props = defineProps<{
  project: Project
}>()

const deckElement = ref<HTMLElement | null>(null)

onMounted(async () => {
  if (!deckElement.value) {
    return
  }

  const { default: Reveal } = await import('reveal.js')
  const deck = new Reveal(deckElement.value, {
    embedded: true,
    hash: false,
    controls: true,
    progress: true
  })

  await deck.initialize()
})
</script>

<template>
  <section class="presentation-section" aria-label="Project presentation">
    <p class="eyebrow">
      Presentation
    </p>
    <div ref="deckElement" class="reveal presentation-deck">
      <div class="slides">
        <section>
          <h2>{{ props.project.title }}</h2>
          <p>{{ props.project.summary }}</p>
        </section>
        <section>
          <h2>Approach</h2>
          <p class="fragment">
            Static project page
          </p>
          <p class="fragment">
            Embedded Reveal.js story
          </p>
          <p class="fragment">
            Client-side demo API integration
          </p>
        </section>
      </div>
    </div>
  </section>
</template>

<style scoped>
.presentation-section {
  display: grid;
  gap: 14px;
}

.presentation-deck {
  aspect-ratio: 16 / 9;
  min-height: 360px;
  border: 1px solid var(--color-line);
  border-radius: 8px;
  background: var(--color-surface);
  box-shadow: var(--shadow-soft);
}

.presentation-deck :deep(.slides) {
  color: var(--color-ink);
}
</style>
