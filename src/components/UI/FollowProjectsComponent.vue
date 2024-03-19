<script>
import ProjectComponent from "components/UI/ProjectComponent.vue";

export default {
  name: "FollowProjectsComponent",
  components: {ProjectComponent},
  props: ['followProjects'],
}
</script>

<template>
  <div class="follow-block center">
    <h2 class="follow-block__title">
      Follow Our Projects
    </h2>
    <p class="follow-block__text">
      It is a long established fact that a reader will be distracted by the of readable<br> content of page lookings at its layouts points.
    </p>
    <div class="projects">
      <ProjectComponent v-for="(project, index) in followProjects" :key="index" :projectData="project"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.follow-block {
  margin-bottom: 96px;
  &__title {
    color: rgb(41, 47, 54);
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    text-align: center;
    margin-bottom: 8px;
  };
  &__text {
    color: rgb(77, 80, 83);
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    text-align: center;
    margin-bottom: 93px;
  }
}
.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  row-gap: 54px;
  column-gap: 104px;
}
</style>
