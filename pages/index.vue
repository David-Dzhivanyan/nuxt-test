<template>
  <div :class="$style.root">
    <CheckFine />
    <section>
      <h2 :class="$style.title">Плюсы использования сервиса «Компас» для анализа штрафов</h2>
      <CardGrid />
    </section>
    <section>
      <h2 :class="$style.title">Документы</h2>
      <Document />
    </section>
  </div>

</template>

<script setup>
const meta = useHead({
  title: 'Compas'
});
</script>

<style module lang="scss">
.root {
  display: flex;
  flex-direction: column;
  gap: 85px;
  margin-top: 70px;

  .title {
    text-align: center;
    font-size: 34px;
    margin-bottom: 33px;
  }

  @media (max-width: map-get($media-breakpoint, md)) {
    margin-top: 30px;
  }
}
</style>