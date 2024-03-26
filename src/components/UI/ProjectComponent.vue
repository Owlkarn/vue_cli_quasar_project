<script>
import ButtonWithArrowComponent from "components/UI/ButtonWithArrowComponent.vue";

export default {
  name: "ProjectComponent",
  components: {ButtonWithArrowComponent},
  props: ['projectData', 'goToProjectDetails'],
}
</script>

<template>
  <article class="project">
    <img class="project__img" :src="projectData.imgUrl" alt="Project Image">
    <svg v-if="projectData.isFavourite" class="project__star" width="35.627148" height="34.361938" viewBox="0 0 35.6271 34.3619" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <desc>
          Created with Pixso.
        </desc>
        <defs>
          <filter id="filter_993_156_dd" x="0.000000" y="0.000000" width="35.627148" height="34.361938" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="0" dy="4"/>
            <feGaussianBlur stdDeviation="1.33333"/>
            <feComposite in2="hardAlpha" operator="out" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect_dropShadow_1"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect_dropShadow_1" result="shape"/>
          </filter>
        </defs>
        <g filter="url(#filter_993_156_dd)">
          <path id="Star 3" d="M19.7144 1.37805L21.6119 7.17737C21.8809 7.99939 22.6478 8.55542 23.5127 8.55542L29.6233 8.55542C31.5641 8.55542 32.3675 11.0417 30.7935 12.1774L25.874 15.7268C25.1682 16.2361 24.8727 17.1433 25.1434 17.9706L27.0281 23.731C27.6302 25.571 25.5272 27.1077 23.9571 25.9747L18.9838 22.3866C18.2851 21.8824 17.3421 21.8824 16.6434 22.3866L11.6701 25.9747C10.0999 27.1077 7.99693 25.571 8.59902 23.731L10.4838 17.9706C10.7544 17.1433 10.459 16.2361 9.75312 15.7268L4.83362 12.1774C3.25969 11.0417 4.063 8.55542 6.00382 8.55542L12.1144 8.55542C12.9793 8.55542 13.7463 7.99939 14.0152 7.17737L15.9127 1.37805C16.5139 -0.459351 19.1132 -0.459351 19.7144 1.37805Z" fill="#FFA928" fill-opacity="1.000000" fill-rule="nonzero"/>
        </g>
      </svg>
    <div class="project__info">
      <div class="project__subscribe">
        <h3 class="project__subscribe_title">{{ projectData.name }}</h3>
        <p class="project__subscribe_text">{{ projectData.text }}</p>
      </div>
      <ButtonWithArrowComponent class="project__btn" @click="goToProjectDetails(projectData.projectId + 1)"/>
    </div>
  </article>
</template>

<style scoped lang="scss">
.project {
  position: relative;
  max-width: 550px;
  &__img {
    margin-bottom: 28px;
  };
  &__star{
    position: absolute;
    top: 0;
    right: 0;
  }
  &__info {
    display: flex;
    justify-content: space-between;
  };

  &__subscribe {
    &_title {
      color: rgb(41, 47, 54);
      font-family: DM Serif Display;
      font-size: 25px;
      font-weight: 400;
      line-height: 125%;
      text-align: left;
      margin-bottom: 4px;
    };

    &_text {
      color: rgb(77, 80, 83);
      font-family: Jost;
      font-size: 22px;
      font-weight: 400;
      line-height: 150%;
      text-align: left;
    }
  };
}
</style>
