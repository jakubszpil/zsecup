<template>
  <textarea v-if="type === 'message'" :class="className ? className : 'form-field__textarea'" :name="name" :id="id" :required="required" :placeholder="placeholder" :value="value" @input="$emit('input', $event.target.value)"></textarea>
  <input v-else :class="className ? className : 'form-field__input'" :type="type" :name="name" :id="id" :required="required" :placeholder="placeholder" :value="value" @input="$emit('input', $event.target.value)" :pattern="pattern" />
</template>

<script>
export default {
  props: ['type', 'value', 'name', 'id', 'placeholder', 'className', 'pattern', 'required'],
}
</script>

<style></style>
