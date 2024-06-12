<template>
  <div :class="$style.root">
    <form id="fine-form" :class="$style.form" @submit.prevent>
      <h1 :class="$style.title">Проверьте штрафы и зарегестрируйтесь в 1 клик</h1>
      <Alert
          title="Успешно!"
          :text="alertText"
          :show="alertShow"
          @close="() => {alertShow = false;}"
      />
      <div :class="$style.row">
        <UITextField :class="$style.input" name="number" v-model="data.number" label="Номер автомобиля" required/>
        <UITextField :class="$style.input" name="region" v-model="data.region" label="Регион" required/>
      </div>
      <UITextField name="certificate" v-model="data.certificate" label="Свидетельство о регистрации ТС" required/>
      <div :class="$style.btns">
        <button
            class="btn btn-lg"
            @click="submit"
        >
          Проверить штрафы
          <IconArrowLeft/>
        </button>
        <a
          class="btn btn-lg btn-outline"
          :class="$style.btnVideo"
          @click="() => {modalShow = true;}"
        >
          <IconYouTube/>
          О сервисе <span :class="$style.span">(1 мин. 20 сек)</span>
        </a>
        <ModalVideo :show="modalShow" v-on:close="() => {modalShow = false;}"/>
      </div>
      <p :class="$style.description">Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете оферту</p>
    </form>

    <div :class="$style.imgWrapper">
      <img alt="laptop" :class="$style.img" src="~/assets/img/laptop.png"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Alert from "~/components/Alert/Alert.vue";
import UITextField from "~/components/ui/UITextField/UITextField.vue";
import IconArrowLeft from "~/components/Icons/IconArrowLeft.vue";
import IconYouTube from "~/components/Icons/IconYouTube.vue";
let data = ref(
    {
      number: '',
      region: '',
      certificate: '',
    }
)

const alertText = computed(() => `Письмо ${JSON.stringify(data.value)} успешно отправлено.`);
let alertShow = ref(false);
let modalShow = ref(false);

const submit = () => {
  const form = document.getElementById('fine-form');

  if(!form) return;
  const inputs = form.querySelectorAll('input');

  let isValid = true;
  inputs.forEach((input) => {
    input.classList.remove()
    if (input.classList.contains('required') && !input.value) {
      input.classList.add('empty');
      isValid = false;
    }
  })

  if(!isValid) return;

  form.reset();
  alertShow.value = true;
}
</script>


<style module lang="scss">
.root {
  display: flex;
  gap: 40px;
  width: 100%;
  padding-bottom: 15px;

  .form {
    flex: 50% 1 0;
  }

  .imgWrapper {
    flex: 50% 1 1;
  }

  .img {
    max-width: 100%;
  }

  .title {
    font-size: 41px;
    line-height: 1.2;
    margin-bottom: 20px;

    @media (max-width: map-get($media-breakpoint, md)) {
      font-size: 32px;
    }
  }

  .row {
    display: flex;
    gap: 30px;
    margin-bottom: 16px;

    @media (max-width: map-get($media-breakpoint, md)) {
      flex-direction: column;
      gap: 16px;
    }
  }

  .input {
    flex: 30% 1 1;
  }

  .input:first-child {
    flex: 70% 1 1;
  }

  .btns {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 15px;
  }

  .btnVideo {
    display: flex;
    align-items: center;
    gap: 7px;
    &:hover {
      text-decoration: none;

      .span {
        color: black;
      }
    }
  }

  .span {
    color: $primary-dark;
    font-size: 15px;
  }

  .description {
    color: $gray-600;
    font-size: 13px;
    margin-top: 16px;
  }

  @media (max-width: map-get($media-breakpoint, lg)) {
    flex-direction: column-reverse;
    align-items: center;
  }
}
</style>