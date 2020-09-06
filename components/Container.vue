<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.container {
  width: 100%;
  height: auto;
  position: relative;
  margin: 0 auto;
  padding: 0 $padding;
  max-width: $max-width;
}
</style>
