<template>
{{route.params.title}}
</template>

<script setup>
const route = useRoute();
const meta = useHead({
  title: route.params.title
});
</script>
<style>

</style>
