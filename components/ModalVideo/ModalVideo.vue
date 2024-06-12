<template>
    <div
        :class="[$style.root, shown]"
        @click="exitModal"
    >
      <iframe :class="$style.frame" width="1120" height="630" src="https://www.youtube.com/embed/U_LlX4t0A9I?si=dy4XlGvdKXcU0v9G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
})
const emit = defineEmits(['close']);

const shown = computed(() => props.show ? 'show' : '');

document && document.addEventListener('keydown', (e) => {
  if (e.code == 'Escape') {
    emit('close');
  }
});
const exitModal = () =>  {
  emit('close');
}

</script>

<style module lang="scss">
.root {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0,0,0,0.6);

  .frame {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:global(.show) {
    display: block;
  }
}
</style>
