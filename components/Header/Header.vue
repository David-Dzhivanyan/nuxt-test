<template>
  <header :class="$style.root">
      <div :class="$style.inner" class="container">
        <nav :class="$style.list">
          <RouterLink to="/">
            <img alt="logo" :class="$style.img" src="../../assets/img/header/logo.svg">
          </RouterLink>
          <RouterLink to="/tariffs"> Тарифы </RouterLink>
          <RouterLink to="/contacts"> Контакты </RouterLink>
        </nav>
        <div :class="$style.list">
          <a href='tel:74951184422'> +7 495 118-44-22</a>
          <RouterLink to="/entry"> Вход </RouterLink>
          <RouterLink to="/registration" class="btn">
              Регистрация
          </RouterLink>
        </div>
      </div>
  </header>
</template>
<script setup>
import {RouterLink} from "vue-router";
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