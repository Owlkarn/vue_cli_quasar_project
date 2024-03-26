<script>
import HeaderComponent from "components/UI/HeaderComponent.vue";
import MainBlogComponent from "components/UI/MainBlogComponent.vue";
import FooterComponent from "components/UI/FooterComponent.vue";
import ProjectCategoriesComponent from "components/UI/ProjectCategoriesComponent.vue";
import ProjectsInTwoColumnsComponent from "components/UI/ProjectsInTwoColumnsComponent.vue";
import PageButton from "components/UI/PageButton.vue";
import {mapGetters} from "vuex";
import {filterData} from "src/utils/filterUtils";
import {clickOnPageBtn} from "src/utils/clickOnPageBtnUtils";

export default {
  name: "ProjectPageComponent",
  components: {
    PageButton,
    ProjectsInTwoColumnsComponent,
    ProjectCategoriesComponent, FooterComponent, MainBlogComponent, HeaderComponent},
  data() {
    return {

    }
  },
  methods: {
    clickOnPageBtn,
    filterProjects(event, tag) {
      filterData(event, tag,
          'projectsInTwoColumns__project',
          'project-categories__block_category-active',
          this.getShowingProjects);
    },
    fixPageNumber(number) {
      if (number.toString().length === 1) return '0' + number
      return number
    },
  },
  computed: {
    ...mapGetters(['getCategories', 'getLargeMainImgs', 'getProjectsData', 'getNextArrowInBtn', 'getShowingProjects']),
    numberOfPages() {
      return Math.ceil(this.getProjectsData.length/8)
    },
    activePage() {
      return Number(this.$route.params.id) || 1;
    }
  },
  created() {
    this.$store.commit('PUT_IN_SHOWING_PROJECTS', this.activePage)
  },
}
</script>

<template>
  <HeaderComponent/>
  <MainBlogComponent :mainImg="getLargeMainImgs[2]"/>
  <ProjectCategoriesComponent :categories="getCategories" :filterFunction="filterProjects"/>
  <ProjectsInTwoColumnsComponent :projectsData="getShowingProjects" :key="getShowingProjects"/>
  <div class="page-buttons">
    <PageButton v-for="(page, index) in numberOfPages"
                :key="index"
                :textInBtn="fixPageNumber(index+1)"
                :class="{ 'active-page-btn': index + 1 === activePage }"
                @click="clickOnPageBtn($event, index, 'PUT_IN_SHOWING_PROJECTS', 'project')"/>
    <PageButton :textInBtn="getNextArrowInBtn" @click="clickOnPageBtn($event, 'next', 'PUT_IN_SHOWING_PROJECTS', 'project')"/>
  </div>

  <FooterComponent/>
</template>

<style scoped lang="scss">
.page-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 200px;
}
</style>
