export default defineEventHandler(async (event) => {
  const { public: env } = useRuntimeConfig()
  const { slug } = getQuery(event)
  const url = `https://world.openfoodfacts.org/api/v2/product/${slug}.json`

  try {
    return await $fetch(url);
  } catch (error) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found' })
  }
})
