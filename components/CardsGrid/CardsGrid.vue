<template>
  <div :class="$style.root">
    <Card v-for="{src, title, description} in data" :src="src" :title="title" :description="description"/>
  </div>
</template>

<script setup>
const data = [
  {
    src: '/images/infinity.svg',
    title: 'Неограниченый автопарк',
    description: 'Можно добавить неограниченное кол-во машин и водителей',
  },
  {
    src: '/images/map.svg',
    title: 'Сокращение затрат до 50%',
    description: 'Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке',
  },
  {
    src: '/images/shield.svg',
    title: 'Безопасность',
    description: 'Данные передаются в зашифрованном виде, они доступны только получателю',
  },
  {
    src: '/images/ring.svg',
    title: 'Уведомление о погашении',
    description: 'Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП',
  },
  {
    src: '/images/receipt.svg',
    title: 'Квитанция об оплате',
    description: 'После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате.',
  },
  {
    src: '/images/time.svg',
    title: 'Все история сохраняется по каждой машине',
    description: 'Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам',
  },
]
</script>
<style module lang="scss">
.root {
  display: flex;
  flex-wrap: wrap;
  gap: 35px;

  & > div {
    flex: 30% 1 1;

    @media (max-width: map-get($media-breakpoint, lg)) {
      flex: 45% 1 1;
    }

    @media (max-width: map-get($media-breakpoint, md)) {
      flex: 100% 1 1;
    }
  }
}
</style>