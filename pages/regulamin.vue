<template>
  <PageInBuild />
  <!-- <Page :article="article">
    <h2>Regulaminy poszczególnych gier</h2>
    <ul class="files">
      <li class="files-item" v-for="(file, key) in files" :key="key">
        <a class="files-item__link link" :href="file.path" target="__blank">
          Regulamin
          <br />
          {{ file.name }}
        </a>
      </li>
    </ul>

    <ContactForm :shortVariant="true" />
  </Page> -->
</template>

<script>
export default {
  data() {
    return {
      files: [
        {
          name: 'CS:GO',
          path: '/regulamin_csgo.pdf',
        },
        {
          name: 'LOL',
          path: '/regulamin_lol.pdf',
        },
        {
          name: 'Minecraft',
          path: '/regulamin_minecraft.pdf',
        },
      ],
    }
  },
  async asyncData({ $content, params }) {
    const article = await $content('', 'regulamin').fetch()
    return { article }
  },
}
</script>

<style lang="scss">
.files {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: $padding;

  &-item {
    &,
    &__link {
      height: 30vmin;
      max-height: 240px;
      text-align: center;
      background-color: $yellow;
      color: $black;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
    }
  }
}
</style>