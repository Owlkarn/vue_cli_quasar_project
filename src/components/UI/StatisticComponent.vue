<script>
export default {
  name: "StatisticComponent",
  props: ['statisticsData'],
}
</script>

<template>
  <div class="statistic-block">
    <div v-for="(item, index) in statisticsData" :key="index" class="statistic-block-data">
      <article class="statistic-block__achievement">
        <h2 class="statistic-block__number">{{ item.number }}</h2>
        <p class="statistic-block__text">{{ item.title }}</p>
      </article>
      <svg v-if="index !== statisticsData.length - 1" class="statistic-block__line" width="1.000000" height="130.000000" viewBox="0 0 1 130" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <desc>
          Created with Pixso.
        </desc>
        <defs/>
        <line id="Line" x1="0.500000" y1="0.000000" x2="0.500000" y2="130.000000" stroke="#CDA274" stroke-opacity="1.000000" stroke-width="1.000000"/>
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">
.statistic-block {
  height: 457px;
  background: rgb(244, 240, 236);
  display: flex;
  justify-content: center;
  margin-bottom: 96px;
  &-data {
    display: flex;
    align-items: center;
    max-width: 299px;
    width: 100%;
  };
  &__achievement {
    max-width: 231px;
    width: 100%;
    margin: 0 auto;
  };
  &__number {
    text-align: center;
    color: rgb(205, 162, 116);
    font-family: DM Serif Display;
    font-size: 85px;
    font-weight: 400;
    line-height: 125%;
  };
  &__text {
    text-align: center;
    color: rgb(77, 80, 83);
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
  };
};
</style>