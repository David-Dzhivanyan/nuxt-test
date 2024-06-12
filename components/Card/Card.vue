<template>
<div :class="$style.root">
  <div :class="$style.imgWrapper">
    <img :alt="title" :src="src"/>
  </div>
  <div>
    <div :class="$style.title">
      {{title}}
    </div>
    <div :class="$style.description">
      {{description}}
    </div>
  </div>
</div>
</template>

<script setup>
const props = defineProps({
  src: { type: String, default: '' },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
})
</script>

<style module lang="scss">
.root {
  display: flex;
  gap: 16px;
  align-items: center;
  background-color: $gray-200;
  border: 1px solid $gray-300;
  border-radius: 10px;
  padding: 20px;

  .imgWrapper {
    flex-grow: 0;
  }

  .title {
    font-weight: 700;
    color: $primary-dark;
    margin-bottom: 10px;
  }

  .description {
    font-size: 15px;
  }
}
</style>