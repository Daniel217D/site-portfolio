<script setup lang="ts">
import { getProjectByName } from '~/entities/project'
import ProjectDemo from '~/widgets/project-demo/ui/ProjectDemo.vue'
import ProjectPage from '~/widgets/project-page/ui/ProjectPage.vue'
import ProjectPresentation from '~/widgets/project-presentation/ui/ProjectPresentation.vue'

const route = useRoute()
const projectName = computed(() => String(route.params.project_name || ''))
const project = computed(() => getProjectByName(projectName.value))

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project not found'
  })
}

useSeoMeta({
  title: () => `${project.value?.title || 'Project'} | Portfolio ML Showcase`,
  description: () => project.value?.summary || 'ML portfolio project page.'
})
</script>

<template>
  <ProjectPage v-if="project" :project="project">
    <template #presentation>
      <ClientOnly>
        <ProjectPresentation :project="project" />
      </ClientOnly>
    </template>

    <template #demo>
      <ProjectDemo :project="project" />
    </template>
  </ProjectPage>
</template>

