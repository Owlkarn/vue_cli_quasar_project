<script>
export default {
  name: "ProjectDetailsTextComponent",
  props: {
    projectDetailsText: Object,
  }
}
</script>

<template>
  <div class="project-details center">
    <h1 class="project-details__title">{{ projectDetailsText.title }}</h1>
    <p class="project-details__text" v-for="(textPart, index) in Object.values(projectDetailsText.text)" :key="index">{{ textPart }}</p>
  </div>

</template>

<style scoped lang="scss">
.project-details {
  margin-bottom: 100px;
  width: 87%;
  &__title {
    color: rgb(41, 47, 54);
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    margin-bottom: 11px;
    margin-left: 271px;
  };
  &__text {
    color: rgb(77, 80, 83);
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    margin-left: 271px;
    margin-bottom: 33px;
  }
}
</style>
