<template>
  <PageInBuild />
  <!-- <Page :article="article" :hasHeading="true" /> -->
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('', 'informacje').fetch()
    return { article }
  },
}
</script>

<style></style>
