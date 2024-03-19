<script>
import HeaderComponent from "components/UI/HeaderComponent.vue";
import MainBlogComponent from "components/UI/MainBlogComponent.vue";
import FooterComponent from "components/UI/FooterComponent.vue";
import ProjectCategoriesComponent from "components/UI/ProjectCategoriesComponent.vue";
import ProjectsInTwoColumnsComponent from "components/UI/ProjectsInTwoColumnsComponent.vue";
import PageButtons from "components/UI/PageButtons.vue";
import {mapGetters} from "vuex";
import {filterData} from "src/utils/filterUtils";

export default {
  name: "ProjectPageComponent",
  components: {
    PageButtons,
    ProjectsInTwoColumnsComponent,
    ProjectCategoriesComponent, FooterComponent, MainBlogComponent, HeaderComponent},
  data() {
    return {
    }
  },
  methods: {
    filterProjects(event, tag) {
      filterData(event, tag,
          'projectsInTwoColumns__project',
          'project-categories__block_category-active',
          this.getProjectsData);
    }
  },
  computed: {
    ...mapGetters(['getCategories', 'getLargeMainImgs', 'getProjectsData'])
  }
}
</script>

<template>
  <HeaderComponent/>
  <MainBlogComponent :mainImg="getLargeMainImgs[2]"/>
  <ProjectCategoriesComponent :categories="getCategories" :filterFunction="filterProjects"/>
  <ProjectsInTwoColumnsComponent :projectsData="getProjectsData"/>
  <PageButtons/>
  <FooterComponent/>
</template>

<style scoped lang="scss">

</style>
