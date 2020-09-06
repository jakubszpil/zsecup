<template>
  <div>
    <label :for="inputID">{{ label }}</label>
    <textarea :v-model="state" v-if="type === 'message'" name="message" :id="inputID"></textarea>
    <input :v-model="state" v-else :type="type" :name="type" :id="inputID" />
  </div>
</template>

<script>
export default {
  props: ['label', 'type', 'state'],
  data() {
    return {
      inputID: Math.random().toString(36).substring(7),
    }
  },
  methods: {},
}
</script>

<style></style>
