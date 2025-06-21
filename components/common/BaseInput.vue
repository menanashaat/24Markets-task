<template>
  <div class="base-input">
    <label :for="id" class="base-input__label">
      {{ label }}
    </label>
    <input
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      v-bind="$attrs"
      class="base-input__field"
    />
  </div> 
</template>

<script setup lang="ts">
defineProps({
  id: String,
  name: String,
  type: {
    type: String,
    default: 'text'
  },
  label: String,
  placeholder: String,
  autocomplete: {
    type: String,
    default: 'off'
  }
});
</script>

<style scoped lang="scss">

.base-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  &__label {
    color: $color-white;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }

  &__field {
    padding: 0.75rem 1rem;
    background-color: #0C0D0F;
    border: 1px solid rgba(107, 114, 128, 0.3);
    border-radius: 1rem;
    color: $color-white;
    font-size: 0.875rem;
    outline: none;

    &::placeholder {
      color: #6B7280;
    }
  }
}
</style>
