<template>
  <div :class="$style.root">
    <label :class="$style.label">{{label}}</label>
    <input
        :class="[$style.input, {required: required}, classes]"
        :name="name"
        v-model="inputData"
        @input="inputEvent"
    />
  </div>
</template>

<script setup>

const props = defineProps({
  name: { type: String, required: true },
  label: {type: String, default: ''},
  required: Boolean,
  modelValue: { type: String, default: '' },
  isValid: Boolean,
})

const emit = defineEmits(['update:modelValue', 'update:isValid'])

const inputData = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value),
})
const inputEvent = (e) => {
  if(e.target.value.length === 0) {
    emit('update:isValid', false);
  } else {
    emit('update:isValid', true);
  }
}

const classes = computed(() => props.isValid ? '' : 'empty');
</script>

<style module lang="scss">
.root {
  display: flex;
  flex-direction: column;
  gap: 5px;

  .label {
    font-size: 12px;
  }

  .input {
    outline: 0;
    border: 1px solid $gray-500;
    border-radius: 5px;
    padding: 10px;
    height: 40px;

    &:focus {
      border: 1px solid $primary;
    }

    &:global {
      &.empty,
      &.empty:focus {
        border-color: $danger;
      }
    }
  }
}
</style>