<template>
  <div>heelo</div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Hello | ' + process.env.SITE_TITLE,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page description',
        },
      ],
    }
  },
}
</script>

<style></style>
