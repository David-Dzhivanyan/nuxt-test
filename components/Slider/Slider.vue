<template>
  <div :class="$style.root">
    <Swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="35"
        navigation
        pagination
        :breakpoints="breakpoints"
        :class="$style.slider"
    >
      <SwiperSlide v-for="({title, description, href}, i) in data" >
        <div :class="$style.slide">
          <div>
            <div :class="$style.title">
              {{title}}
            </div>
            <div :class="$style.description">
              {{description}}
            </div>
          </div>
          <NuxtLink :class="[$style.link, 'btn btn-lg']" :to="'/supportPage/Статья ' + href">
            Перейдите
          </NuxtLink>
        </div>

      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Navigation, Pagination];

const data = [
  {
    title: 'Лицензионный договор',
    description: 'Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. ',
    href: '1'
  },
  {
    title: 'Политика обработки персональных данных',
    description: 'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.',
    href: '2'
  },
  {
    title: 'Информация об оплате',
    description: 'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.',
    href: '3'
  },
  {
    title: 'Лицензионный договор',
    description: 'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.',
    href: '4'
  },
];

const breakpoints = {
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  }
}
</script>

<style module lang="scss">
.root {
  padding: 0 15px;

  .slider {
    padding: 20px;
    margin: -20px 0;

    @media (max-width: map-get($media-breakpoint, sm)) {
      margin: -20px;
    }
  }

  .slide {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.12);
    border-radius: 10px;
    min-height: 450px;
    height: 100%;
    padding: 25px;

    @media (max-width: map-get($media-breakpoint, md)) {
      padding: 15px;
    }
  }

  .title {
    color: $primary-dark;
    font-size: 31px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 15px;
  }

  .link {
    text-align: center;
  }

  :global {
    .swiper-pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      bottom: 0;
    }
    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
    }

    .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
      width: 7px;
      height: 7px;
    }

    .swiper-button-next,
    .swiper-button-prev {
      background-color: rgba(166, 183, 212, 0.47);
      top: 50%;
      border-radius: 50%;
      padding: 40px
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
      font-size: 28px;
      font-weight: 500;
      color: white;
    }

    .swiper-button-next {
      right: 0;
      transform: translateX(50%);
    }

    .swiper-button-next::after { margin-right: 26px; }

    .swiper-button-prev {
      left: 0;
      transform: translateX(-50%);
    }

    .swiper-button-prev::after { margin-left: 26px; }
  }

  @media (max-width: map-get($media-breakpoint, md)) {
    padding: 0;
  }
}
</style>