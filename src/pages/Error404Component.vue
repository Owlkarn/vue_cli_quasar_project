<script>
import HeaderComponent from "components/UI/HeaderComponent.vue";

export default {
  name: "Error404Component",
  components: {HeaderComponent}
}
</script>

<template>
  <HeaderComponent/>
  <article class="error-page">
    <div class="error-page__left-part">
      <h1 class="error-page__left-part_title">404</h1>
      <p class="error-page__left-part_text">We are sorry, but the page you requested was not found</p>
      <button @click="this.$router.push({ name: 'home' })" class="error-page__left-part_back-to-home-btn">
        Back To Home
        <svg class="back-to-home-btn__arrow" width="18.000000" height="16.000000" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <desc>
            Created with Pixso.
          </desc>
          <defs/>
          <path id="Vector" d="M0.85 7.43L14.58 7.29M9.47 0.91L16 7.43L9.34 " stroke="#CDA274" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    <div class="error-page__right-part">
      <img src="../assets/img/error404.png" alt="error404">
    </div>
  </article>

</template>

<style scoped lang="scss">
.error-page {
  padding-left: calc(50% - 600px);
  display: flex;
  gap: 80px;
  &__left-part {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 570px;
    &_title {
      color: rgb(205, 162, 116);
      font-family: DM Serif Display;
      font-size: 250px;
      font-weight: 400;
      line-height: 125%;
      margin-bottom: 15px;
    };
    &_text {
      color: rgb(41, 47, 54);
      font-family: DM Serif Display;
      font-size: 35px;
      font-weight: 400;
      line-height: 150%;
      margin-bottom: 24px;
    };
    &_back-to-home-btn {
      width: 254px;
      height: 75px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 18px;
      box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
      background: rgb(41, 47, 54);
      color: rgb(255, 255, 255);
      font-family: Jost;
      font-size: 18px;
      font-weight: 600;
      line-height: 125%;
      text-align: center;
    }
  }
}
</style>
