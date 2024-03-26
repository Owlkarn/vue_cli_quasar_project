<script>
import HeaderComponent from "components/UI/HeaderComponent.vue";
import FooterComponent from "components/UI/FooterComponent.vue";
import MainBlogComponent from "components/UI/MainBlogComponent.vue";
import LatestPostComponent from "components/UI/LatestPostComponent.vue";
import ArticlesAndNewsComponent from "components/UI/ArticlesAndNewsComponent.vue";
import PageButtons from "components/UI/PageButton.vue";
import {mapGetters} from "vuex";
import PageButton from "components/UI/PageButton.vue";
import {clickOnPageBtn} from "src/utils/clickOnPageBtnUtils";

export default {
  name: "BlogPageComponent",
  data() {
    return {
    }
  },
  methods: {
    clickOnPageBtn,
    fixPageNumber(number) {
      if (number.toString().length === 1) return '0' + number
      return number
    },
  },
  computed: {
    ...mapGetters(['getArticlesAndNewsOptions', 'getLargeMainImgs', 'getLatestPostData', 'getArticlesAndNews', 'getNextArrowInBtn', 'getShowingArticlesAndNews']),
    activePage() {
      return Number(this.$route.params.id) || 1;
    },
    numberOfPages() {
      return Math.ceil(this.getArticlesAndNews.length/6)
    },
  },
  created() {
    this.$store.commit('PUT_IN_SHOWING_ARTICLES_AND_NEWS', this.activePage)
  },
  components: {
    PageButton,
    ArticlesAndNewsComponent, LatestPostComponent, MainBlogComponent, FooterComponent, HeaderComponent}
}
</script>

<template>
  <HeaderComponent/>
  <MainBlogComponent :mainImg="getLargeMainImgs[0]"/>
  <LatestPostComponent :latestPostData="getLatestPostData[0]"/>
  <ArticlesAndNewsComponent :articlesAndNewsOptions="getArticlesAndNewsOptions[1]"  :articlesAndNews="getShowingArticlesAndNews" :key="getShowingArticlesAndNews"/>
  <div class="page-buttons">
    <PageButton v-for="(page, index) in numberOfPages"
                :key="index"
                :textInBtn="fixPageNumber(index+1)"
                :class="{ 'active-page-btn': index + 1 === activePage }"
                @click="clickOnPageBtn($event, index, 'PUT_IN_SHOWING_ARTICLES_AND_NEWS','blog')"/>
    <PageButton :textInBtn="getNextArrowInBtn" @click="clickOnPageBtn($event, 'next', 'PUT_IN_SHOWING_ARTICLES_AND_NEWS', 'blog')"/>
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
