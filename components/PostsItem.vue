<template>
  <li class="shortcuts-item" ref="item">
    <nuxt-link class="link shortcuts-item-content" :to="'/aktualnosci/' + post.slug">
      <h3 class="shortcuts-item-content__title">{{ post.title }}</h3>
      <p class="shortcuts-item-content__description">{{ post.description }}</p>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    post: Object,
  },
}
</script>

<style>
</style>