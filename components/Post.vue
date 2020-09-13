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
      if (window.innerWidth < 800) this.$refs.post.setAttribute('style', `height: ${width / 2}px`)
      else this.$refs.post.setAttribute('style', `height: ${width}px`)
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