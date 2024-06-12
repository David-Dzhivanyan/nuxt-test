<template>
  <div :class="$style.root">
    <Header/>
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script setup>
</script>

<style module lang="scss">
.root {
  margin-bottom: 300px;
}
</style>