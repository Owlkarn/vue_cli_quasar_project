<script>
export default {
  name: "MainPageStartComponent",
  props: ['mainPageStartedURL'],
  computed: {
  }
}
</script>

<template>
  <div class="start-block center">
    <div class="start-block__container" :style="{ backgroundImage: `url(${mainPageStartedURL})` }">
      <h1 class="start-block__title">
        Let Your Home Be Unique
      </h1>
      <p class="start-block__text">
        There are many variations of the passages of lorem Ipsum fromavailable, majority.
      </p>
      <button class="start-block__btn">
        Get Started
        <svg width="17.151123" height="16.005859" viewBox="0 0 17.1511 16.0059" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <desc>
            Created with Pixso.
          </desc>
          <defs/>
          <path id="Vector" d="M1.00995 7.93823L14.7332 7.80151M9.62811 1.41431L16.1511 7.93726L9.4967 14.5918" stroke="#CDA274" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.start-block {
  height: 758px;
  margin-bottom: 96px;

  &__container {
    border-radius: 70px;
    height: 100%;
    //background-image: url("assets/img/start_img.png");
  }

  &__title {
    color: rgb(41, 47, 54);
    font-family: DM Serif Display;
    font-size: 65px;
    font-weight: 400;
    line-height: 125%;
    text-align: left;
    width: 40%;
    padding-top: 208px;
    padding-left: 52px;
    padding-bottom: 18px;
  };
  &__text {
    color: rgb(77, 80, 83);
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    text-align: left;
    padding-left: 52px;
    width: 39%;
    padding-bottom: 21px;
  };

  &__btn {
    width: 220.14px;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-left: 52px;
    border-radius: 18px;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    background: rgb(41, 47, 54);
    color: rgb(255, 255, 255);
    font-family: Jost;
    font-size: 18px;
    font-weight: 600;
    line-height: 125%;
    text-align: center;
  };
}

</style>
