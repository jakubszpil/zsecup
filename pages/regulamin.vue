<template>
  <Page :article="article" :hasHeading="true" />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('', 'regulamin').fetch()
    return { article }
  },
}
</script>

<style>
</style>