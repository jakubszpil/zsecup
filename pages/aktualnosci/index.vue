<template>
  <PageInBuild />
  <!-- <Section id="news" heading="Aktualności" :back="true">
    <Posts :posts="articles" />
  </Section> -->
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('posts').fetch()
    return { articles }
  },
}
</script>

<style></style>
