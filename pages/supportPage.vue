<template>
  <Head>
    <Title>{{route.params.title}}</Title>
  </Head>
{{route.params.title}}
</template>

<script setup>
const route = useRoute()
</script>
<style>

</style>
