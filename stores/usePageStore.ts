export const usePageStore = defineStore('pageStore', () => {
  const page = ref()

  async function getPage(slug: string) {
    const { data }: any = await useFetch('/api/page', {
      query: {
        slug: encodeURI(slug),
      },
      key: `page-${slug}`,
    })

    if (data.value) {
      page.value = await data?.value?.product
    } else {
      throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
    }

    return { data }
  }

  return {
    page,
    getPage,
  }
})
