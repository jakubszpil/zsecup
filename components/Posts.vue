<template>
  <ul class="shortcuts">
    <PostsItem v-for="(post, key) in posts" :key="key" :post="post" />
  </ul>
</template>

<script>
export default {
  props: {
    posts: Array,
  },
}
</script>

<style>
</style>