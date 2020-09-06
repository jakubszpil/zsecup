<template>
  <section>
    <form>
      <ContactFormTextField v-if="shortVariant" label="Imię" type="text" />
      <ContactFormTextField label="E-mail" type="email" />
      <ContactFormTextField label="Wiadomość" type="message" />
    </form>
  </section>
</template>

<script>
export default {
  props: {
    shortVariant: Boolean,
  },
  data() {
    return {
      user: {},
    }
  },
}
</script>

<style>
</style>