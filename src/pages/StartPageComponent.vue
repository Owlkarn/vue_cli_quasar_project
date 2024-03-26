<script>
import FollowProjectsComponent from "components/UI/FollowProjectsComponent.vue";
import StatisticComponent from "components/UI/StatisticComponent.vue";
import ArticlesAndNewsComponent from "components/UI/ArticlesAndNewsComponent.vue";
import HeaderComponent from "components/UI/HeaderComponent.vue";
import FooterComponent from "components/UI/FooterComponent.vue";
import {mapGetters} from "vuex";
import MainPageStartComponent from "components/UI/MainPageStartComponent.vue";

export default {
  name: "StartPageComponent",
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['getArticlesAndNewsOptions', 'getFollowProjectsData', 'getStatisticsData', 'getMainPageStartedImgURL', 'getArticlesAndNews'])
  },
  components: {
    MainPageStartComponent,
    FooterComponent,
    HeaderComponent,
    ArticlesAndNewsComponent, StatisticComponent, FollowProjectsComponent}
}
</script>

<template>
  <HeaderComponent/>
  <MainPageStartComponent :mainPageStartedURL="getMainPageStartedImgURL[0]"/>
  <FollowProjectsComponent :followProjects="getFollowProjectsData"/>
  <StatisticComponent :statisticsData="getStatisticsData"/>
  <ArticlesAndNewsComponent :articlesAndNewsOptions="getArticlesAndNewsOptions[0]"  :articlesAndNews="getArticlesAndNews"/>
  <FooterComponent/>
</template>

<style scoped lang="scss">

</style>
