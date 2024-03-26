<script>
import ProjectComponent from "components/UI/ProjectComponent.vue";

export default {
  name: "ProjectsInTwoColumnsComponent",
  components: {ProjectComponent},
  props:['projectsData'],
  data() {
    return {
      leftColumnProjects: [],
      rightColumnProjects: [],
    };
  },
  mounted() {
    this.inputProjectsInTwoColumns();
  },
  methods: {
    async inputProjectsInTwoColumns() {
      let leftColumnHeight = 0;
      let rightColumnHeight = 0;
      const leftColumnEl = this.$refs.leftColumn;
      const rightColumnEl = this.$refs.rightColumn;

      for (const project of this.projectsData) {
        console.log(leftColumnHeight + ' | ' + rightColumnHeight);
        if (leftColumnHeight <= rightColumnHeight) {
          this.leftColumnProjects.push(project);
          await this.delay(50);
          leftColumnHeight = await this.getColumnHeight(leftColumnEl);
        } else {
          this.rightColumnProjects.push(project);
          await this.delay(50);
          rightColumnHeight = await this.getColumnHeight(rightColumnEl);
        }
      }
    },

    async delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },

    getColumnHeight(column) {
      const columnEls = column.querySelectorAll('.project__img');
      let height = 0;
      columnEls.forEach(element => {
        height += element.offsetHeight;
      });
      return height;
    },
    goToProjectDetails(projectId) {
      this.$router.push({ name: 'project_details', params: { id: projectId } });
    }
  }
}
</script>

<template>
  <div class="projectsInTwoColumns center">
    <div class="projectsInTwoColumns__left-column" ref="leftColumn">
      <ProjectComponent
        v-for="project in leftColumnProjects"
        :key="project.projectId"
        :projectData="project"
        :goToProjectDetails="() => goToProjectDetails(project.projectId)"
        class="projectsInTwoColumns__project"
      />
    </div>
    <div class="projectsInTwoColumns__right-column" ref="rightColumn">
      <ProjectComponent
        v-for="project in rightColumnProjects"
        :key="project.projectId"
        :projectData="project"
        :goToProjectDetails="() => goToProjectDetails(project.projectId)"
        class="projectsInTwoColumns__project"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.projectsInTwoColumns {
  margin-bottom: 60px;
  display: flex;
  gap: 30px;
  justify-content: center;
  &__project {
    margin-bottom: 35px;
  }
}

</style>
