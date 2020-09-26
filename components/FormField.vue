<template>
  <div class="form-field">
    <label :for="id" class="form-field__label">{{ label }}</label>
    <textarea v-if="type === 'message'" class="form-field__textarea" :name="name" :id="id" required :placeholder="placeholder ? placeholder : label" :value="value" @input="$emit('input', $event.target.value)"></textarea>
    <input v-else class="form-field__input" :type="type" :name="name" :id="id" required :placeholder="placeholder ? placeholder : label" :value="value" @input="$emit('input', $event.target.value)" :pattern="pattern" />
  </div>
</template>

<script>
export default {
  props: ['type', 'value', 'label', 'name', 'id', 'placeholder', 'pattern'],
}
</script>

<style></style>
