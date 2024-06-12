<template>
  <header :class="$style.root">
      <div :class="$style.inner" class="container">
        <nav :class="$style.list">
          <NuxtLink  to="/">
            <img alt="logo" :class="$style.img" src="../../assets/img/header/logo.svg">
          </NuxtLink >
          <NuxtLink  to="/supportPage/Тарифы"> Тарифы </NuxtLink >
          <NuxtLink  to="/supportPage/Контакты"> Контакты </NuxtLink >
        </nav>
        <nav :class="$style.list">
          <a href='tel:74951184422'> +7 495 118-44-22</a>
          <NuxtLink  to="/supportPage/Вход"> Вход </NuxtLink >
          <NuxtLink  to="/supportPage/Регистрация" class="btn">
              Регистрация
          </NuxtLink >
        </nav>
      </div>
  </header>
</template>
<script setup>
</script>

<style module lang="scss">
.root {
  background: linear-gradient(90deg, #000000 30%, #1C2734 73%);

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: map-get($media-breakpoint, md)) {
      flex-direction: column;
      gap: 20px;
    }
  }

  .list {
    display: flex;
    align-items: center;
    column-gap: 30px;
    row-gap: 10px;

    @media (max-width: map-get($media-breakpoint, sm)) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .img {
    display: block;
  }
}
</style>