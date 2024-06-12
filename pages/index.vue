<template>
  <div :class="$style.root">
    <CheckFine />
    <div>
      <h2 :class="$style.title">Плюсы использования сервиса «Компас» для анализа штрафов</h2>
      <CardsGrid />
    </div>
    <div>
      <h2 :class="$style.title">Документы</h2>
      <Slider />
    </div>
  </div>

</template>

<script setup>
import Slider from "@/components/Slider/Slider.vue";
import CheckFine from "~/components/CheckFine/CheckFine.vue";
import CardsGrid from "~/components/CardsGrid/CardsGrid.vue";

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
  }

  @media (max-width: map-get($media-breakpoint, md)) {
    margin-top: 30px;
  }
}
</style>