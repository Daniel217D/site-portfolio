<script setup lang="ts">
import type { Project } from '~/entities/project'
import type { DemoRequestState } from '~/features/demo-api-request/model/types'
import { useDemoApiConfig } from '~/shared/config/demoApi'

defineProps<{
  project: Project
}>()

const input = ref('')
const state = reactive<DemoRequestState>({
  status: 'idle',
  result: '',
  error: ''
})
const demoApi = useDemoApiConfig()
const canSubmit = computed(() => input.value.trim().length > 0 && state.status !== 'loading')

async function submitDemo() {
  if (!canSubmit.value) {
    return
  }

  state.status = 'loading'
  state.result = ''
  state.error = ''

  try {
    if (!demoApi.url) {
      throw new Error('Demo API URL is not configured yet.')
    }

    const response = await $fetch<{ result?: string }>(demoApi.url, {
      method: 'POST',
      headers: demoApi.key ? { Authorization: `Bearer ${demoApi.key}` } : undefined,
      body: {
        text: input.value
      }
    })

    state.result = response.result || 'Demo API returned an empty result.'
    state.status = 'success'
  } catch (error) {
    state.error = error instanceof Error ? error.message : 'Demo request failed.'
    state.status = 'error'
  }
}
</script>

<template>
  <section class="demo-section" aria-label="Project demo">
    <div>
      <p class="eyebrow">
        Demo
      </p>
      <h2>Try the API-backed flow</h2>
      <p>
        The alpha demo uses public runtime configuration and is ready to connect once the external endpoint is available.
      </p>
    </div>

    <form class="demo-form" @submit.prevent="submitDemo">
      <label for="demo-input">Input text</label>
      <textarea
        id="demo-input"
        v-model="input"
        rows="4"
        placeholder="Type a short sentence for the demo request"
      />
      <button type="submit" :disabled="!canSubmit">
        {{ state.status === 'loading' ? 'Running...' : 'Run demo' }}
      </button>
    </form>

    <p v-if="state.status === 'success'" class="demo-result">
      {{ state.result }}
    </p>
    <p v-if="state.status === 'error'" class="demo-error">
      {{ state.error }}
    </p>
  </section>
</template>

<style scoped>
.demo-section {
  display: grid;
  gap: 18px;
  padding: 24px;
  border: 1px solid var(--color-line);
  border-radius: 8px;
  background: rgb(255 250 240 / 72%);
}

h2,
p {
  margin: 0;
}

p {
  color: var(--color-muted);
  line-height: 1.55;
}

.demo-form {
  display: grid;
  gap: 10px;
}

label {
  font-weight: 700;
}

textarea {
  width: 100%;
  resize: vertical;
  border: 1px solid var(--color-line);
  border-radius: 6px;
  padding: 12px;
  background: var(--color-surface);
  color: var(--color-ink);
}

button {
  justify-self: start;
  min-height: 42px;
  border: 0;
  border-radius: 6px;
  padding: 0 16px;
  background: var(--color-accent);
  color: white;
  cursor: pointer;
  font-weight: 700;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

.demo-result,
.demo-error {
  padding: 12px;
  border-radius: 6px;
  background: var(--color-surface);
}

.demo-error {
  color: #9b2f1f;
}
</style>

