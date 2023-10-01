<template>
  <component :is="getPageComponent" />
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const slug = route.params.slug[0] || '737628064502'

// Store
const { getPage } = usePageStore()
const { page } = storeToRefs(usePageStore())

try {
  await getPage(slug)
} catch (error: any) {
  if (error?.statusCode === 404) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
  }
}

const getPageComponent = computed(() => {
  return resolveComponent('Food')
})

const pageMetaTitle = computed(() => {
  return page?.value?.meta?.find((meta: any) => meta.name === 'title')?.content
})

useHead({
  title: pageMetaTitle ?? '',
  meta: page?.value?.meta as any,
})
</script>
