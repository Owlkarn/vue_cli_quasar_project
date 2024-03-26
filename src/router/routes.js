import BlogPageComponent from "pages/BlogPageComponent.vue";
import StartPageComponent from "pages/StartPageComponent.vue";
import ProjectPageComponent from "pages/ProjectPageComponent.vue";
import ProjectDetailsComponent from "pages/ProjectDetailsComponent.vue";
import BlogDetailsPageContent from "pages/BlogDetailsPageContent.vue";
import Error404Component from "pages/Error404Component.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: StartPageComponent
  },
  {
    path: '/project/:id',
    name: 'project_details',
    component: ProjectDetailsComponent
  },
  {
    path: '/project/page/:id',
    name: 'project_page',
    component: ProjectPageComponent
  },
  {
    path: '/blog/page/:id',
    name: 'blog_page',
    component: BlogPageComponent
  },
  {
    path: '/blog/:tag/:id',
    name: 'blog_details',
    component: BlogDetailsPageContent
  },
  {
    path: '/blog/:tag',
    name: 'blog_details_filter',
    component: BlogDetailsPageContent
  },
  {
    path: '/blog',
    name: 'blog_details_noFilter',
    component: BlogDetailsPageContent
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error404',
    component: Error404Component
  },
];

export default routes
