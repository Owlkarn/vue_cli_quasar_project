import BlogPageComponent from "components/BlogPageComponent.vue";
import StartPageComponent from "components/StartPageComponent.vue";
import ProjectPageComponent from "components/ProjectPageComponent.vue";
import ProjectDetailsComponent from "components/ProjectDetailsComponent.vue";

const routes = [
  {
    path: '/blog',
    name: 'blog',
    component: BlogPageComponent
  },
  {
    path: '/',
    name: 'home',
    component: StartPageComponent
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectPageComponent
  },
  {
    path: '/project_details*',
    name: 'project_details',
    component: ProjectDetailsComponent
  },
  {
    path: '/project/:id',
    name: 'project_details',
    component: ProjectDetailsComponent
  },
];

export default routes
