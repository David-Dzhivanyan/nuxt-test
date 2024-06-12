<template>
<div :class="[$style.root, $style[type], shown]">
  <b>{{title}}</b><br>
  {{text}}
</div>
</template>

<script setup>
  const props = defineProps({
    title: { type: String, default: ''},
    text: { type: String, default: '' },
    type: { type: String, default: 'success'},
    modelValue: Boolean,
  })
  const emit = defineEmits(['update:modelValue']);

  const shown = computed(() => {
    if (props.modelValue) {
      setTimeout(() => {
        emit('update:modelValue', false);
      }, 2000)
      return 'show';
    }

    return '';
  });
</script>
<style module lang="scss">
.root {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-100%);
  transition: transform 0.3s ease-in-out;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: white;
  max-width: 800px;
  padding: 20px;

  &.success {
    background-color: $success;
  }

  &:global(.show) {
    transform: translateX(-50%);
  }
}


</style>