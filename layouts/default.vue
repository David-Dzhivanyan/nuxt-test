<template>
  <div :class="$style.root">
    <Header/>
    <main class="container">
      <slot />
    </main>
  </div>
</template>

<script setup>
</script>

<style module lang="scss">
.root {
  margin-bottom: 300px;
}
</style>