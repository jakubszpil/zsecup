<template>
  <Page :article="article" :hasHeading="false" />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('posts', params.slug).fetch()
    return { article }
  },
}
</script>

<style lang="scss">
article {
  p {
    margin-bottom: $padding / 2;
  }
  p + p {
    margin-bottom: $padding;
  }
}
</style>
