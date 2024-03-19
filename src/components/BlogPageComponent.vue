<script>
import HeaderComponent from "components/UI/HeaderComponent.vue";
import FooterComponent from "components/UI/FooterComponent.vue";
import MainBlogComponent from "components/UI/MainBlogComponent.vue";
import LatestPostComponent from "components/UI/LatestPostComponent.vue";
import ArticlesAndNewsComponent from "components/UI/ArticlesAndNewsComponent.vue";
import PageButtons from "components/UI/PageButtons.vue";
import {mapGetters} from "vuex";

export default {
  name: "BlogPageComponent",
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['getArticlesAndNewsOptions', 'getLargeMainImgs', 'getLatestPostData', 'getArticlesAndNews'])
  },
  components: {
    PageButtons,
    ArticlesAndNewsComponent, LatestPostComponent, MainBlogComponent, FooterComponent, HeaderComponent}
}
</script>

<template>
  <HeaderComponent/>
  <MainBlogComponent :mainImg="getLargeMainImgs[0]"/>
  <LatestPostComponent :latestPostData="getLatestPostData[0]"/>
  <ArticlesAndNewsComponent :articlesAndNewsOptions="getArticlesAndNewsOptions[1]"  :articlesAndNews="getArticlesAndNews"/>
  <PageButtons/>
  <FooterComponent/>
</template>

<style scoped lang="scss">

</style>
