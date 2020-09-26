<template>
  <Page :article="article" />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('', 'turniej').fetch()
    return { article }
  },
}
</script>

<style>
</style>