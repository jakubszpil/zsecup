<template>
  <li ref="post">
    <slot />
  </li>
</template>

<script>
export default {
  props: {
    post: Object,
  },
  methods: {
    changeHeight() {
      const { width } = this.$refs.post.getBoundingClientRect()

      const apply = (value) => this.$refs.post.setAttribute('style', `height: ${value}px`)

      if (width < 320) apply(width)
      else if (width > 400 || width < 200) apply(width / 2)
      else apply((width / 3) * 2)
    },
    handleResize() {
      this.changeHeight()
    },
  },
  mounted() {
    this.changeHeight()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
}
</script>

<style>
</style>