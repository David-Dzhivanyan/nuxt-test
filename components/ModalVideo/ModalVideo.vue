<template>
    <div
        :class="[$style.root, shown]"
        @click="exitModal"
    >
      <iframe :class="$style.frame" src="https://www.youtube.com/embed/U_LlX4t0A9I?si=dy4XlGvdKXcU0v9G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</template>

<script setup>
const props = defineProps({
  modelValue: Boolean,
})
const emit = defineEmits(['update:modelValue']);

const shown = computed(() => props.modelValue ? 'show' : '');

document && document.addEventListener('keydown', (e) => {
  if (e.code == 'Escape') {
    emit('update:modelValue');
  }
});
const exitModal = () =>  {
  emit('update:modelValue');
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
    width: 1120px;
    height: 630px;
    max-width: 100% !important;

    @media (max-width: map-get($media-breakpoint, xl)) {
      width: 560px;
      height: 315px;
    }

    @media (max-width: map-get($media-breakpoint, md)) {
      width: 392px;
      height: 220px;
    }

    @media (max-width: map-get($media-breakpoint, sm)) {
      width: 100%;
      height: 30%;
    }
  }

  &:global(.show) {
    display: block;
  }
}
</style>
