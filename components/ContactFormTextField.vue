<template>
  <div>
    <label :for="inputID">{{ label }}</label>
    <textarea v-if="type === 'message'" name="message" :id="inputID"></textarea>
    <input v-else :type="type" :name="type" :id="inputID" />
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    label: String,
  },
  data() {
    return {
      inputID: Math.random().toString(36).substring(7),
    }
  },
  methods: {},
}
</script>

<style>
</style>