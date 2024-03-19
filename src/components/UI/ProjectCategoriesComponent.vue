<script>
export default {
  name: "ProjectCategoriesComponent",
  props: {
    categories: Object,
    filterFunction: Function,
  },
  methods: {
    filterProject(event, category) {
      this.filterFunction(event, category );
    }
  },
}
</script>

<template>
<article class="project-categories center">
  <div class="project-categories__block">
    <div @click="filterProject($event, category)" v-for="(category, index) in categories" :key="index" class="project-categories__block_category">
      <p>{{ category }}</p>
    </div>
  </div>

</article>
</template>

<style scoped lang="scss">
p {
  margin: 0;
}
.project-categories {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  &__block{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    border: 1px solid rgb(205, 162, 116);
    max-width: 800px;
    width: 100%;
    &_category {
      max-width: 200px;
      width: 100%;
      text-align: center;
      padding: 26px 0;
      color: rgb(41, 47, 54);
      font-family: Jost;
      font-size: 18px;
      font-weight: 600;
      line-height: 125%;
      transition: background-color 0.3s ease;
      &-active {
        color: rgb(255, 255, 255);
        border-radius: 18px;
        background: rgb(205, 162, 116);
        transition: background-color 0.3s ease;
      }
    }
  }

}
</style>
