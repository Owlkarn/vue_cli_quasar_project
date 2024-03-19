<script>
import ProjectComponent from "components/UI/ProjectComponent.vue";

export default {
  name: "ProjectsInTwoColumnsComponent",
  components: {ProjectComponent},
  props:['projectsData'],
  mounted() {
    this.inputProjectsInTwoColumns();
  },
  methods: {
    inputProjectsInTwoColumns() {
      const projectEl = document.querySelector('.projectsInTwoColumns__project');
      this.projectsData.slice(1).forEach(project => {
        const cloneProjectEl = projectEl.cloneNode(true);
        const rightColumnEl = document.querySelector('.projectsInTwoColumns__right-column');
        const leftColumnEl = document.querySelector('.projectsInTwoColumns__left-column');
        cloneProjectEl.querySelector('.project__img').setAttribute('src', project.imgUrl);
        cloneProjectEl.querySelector('.project__subscribe_title').setAttribute('src', project.name);
        cloneProjectEl.querySelector('.project__subscribe_text').setAttribute('src', project.text);
        cloneProjectEl.querySelector('.project__star').style.display = project.isFavourite ? 'block' : 'none';
        cloneProjectEl.querySelector('.project__btn').addEventListener('click', () => this.goToProjectDetails(this.projectsData.indexOf(project)));
        setTimeout(() => {
          if (this.getColumnHeight(leftColumnEl) <= this.getColumnHeight(rightColumnEl)) {
            leftColumnEl.appendChild(cloneProjectEl);
          } else {
            rightColumnEl.appendChild(cloneProjectEl);
          }
        }, 200);
      })
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
      console.log("Нажата кнопка проекта с идентификатором:", projectId);
      this.$router.push({ name: 'project_details', params: { id: projectId } });
    }
  }
}
</script>

<template>
  <div class="projectsInTwoColumns center">
    <div class="projectsInTwoColumns__left-column">
      <ProjectComponent class="projectsInTwoColumns__project"
                        :projectData="projectsData[0]"
                        :goToProjectDetails="() => goToProjectDetails(this.projectsData.indexOf(projectsData[0]))"/>
    </div>
    <div class="projectsInTwoColumns__right-column">
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
