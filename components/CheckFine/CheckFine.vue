<template>
  <section :class="$style.root">
    <form id="fine-form" ref="formRef" :class="$style.form" @submit.prevent>
      <h1 :class="$style.title">Проверьте штрафы и зарегестрируйтесь в 1 клик</h1>
      <Alert
          title="Успешно!"
          text="Письмо успешно отправлено."
          v-model="alertShow"
      />
      <div :class="$style.row">
        <UiTextField
          :class="$style.input"
          name="number"
          v-model="dataForm.number.text"
          v-model:isValid="dataForm.number.isValid"
          label="Номер автомобиля"
          required
        />
        <UiTextField
          :class="$style.input"
          name="region"
          v-model="dataForm.region.text"
          v-model:isValid="dataForm.region.isValid"
          label="Регион"
          required
        />
      </div>
      <UiTextField
        name="certificate"
        v-model="dataForm.certificate.text"
        v-model:isValid="dataForm.certificate.isValid"
        label="Свидетельство о регистрации ТС"
        :required="dataForm.certificate.required"
      />
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
        <ModalVideo v-model="modalShow"/>
      </div>
      <p :class="$style.description">Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете оферту</p>
    </form>

    <div :class="$style.imgWrapper">
      <img alt="laptop" :class="$style.img" src="~/assets/img/check-fine/laptop.png"/>
    </div>
  </section>
</template>

<script setup lang="ts">
let alertShow = ref(false);
let modalShow = ref(false);
let formRef = ref(null);

let dataForm = ref(
  {
    number: {
      text: '',
      isValid: true,
      required: true,
    },
    region: {
      text: '',
      isValid: true,
      required: true,
    },
    certificate: {
      text: '',
      isValid: true,
      required: true,
    },
  }
)

const submit = () => {
  if(!formRef) return;

  let formValid = true;
  for (const input in dataForm.value) {
    dataForm.value[input].isValid = true;
    if (dataForm.value[input].required && !dataForm.value[input].text) {
      dataForm.value[input].isValid = false;
      formValid = false;
    }
  }

  if(!formValid) return;

  for (const input in dataForm.value)
    dataForm.value[input].text = '';

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