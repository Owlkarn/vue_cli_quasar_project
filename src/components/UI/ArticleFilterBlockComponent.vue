<script>
import TagComponent from "./TagComponent.vue";
import ArticlesListComponent from "./ArticlesListComponent.vue";
import {mapGetters} from "vuex";
import {filterData} from "src/utils/filterUtils";

export default {
  name: "ArticleFilterBlockComponent",
  components: {ArticlesListComponent, TagComponent},
  props: ['articleId', 'articleTag'],
  data() {
    return {
      isFiltering: false,
    };
  },
  methods: {
    filterArticles(event, tag) {
      this.isFiltering = true;
      filterData(event, tag,
          'articles-list__article',
          'articles-list-block__right_tag-active',
          this.getArticlesList);
      if (document.querySelectorAll('.articles-list-block__right_tag-active').length === 0)
      {
        this.$router.push({ name: 'blog_details_noFilter' });
      } else {
        this.$router.push({ name: 'blog_details_filter', params: { tag: tag} });
      }
    },
    findArticleById(id) {
      return this.getArticlesList.find(article => article.articleId === id);
    }
  },
  computed: {
    ...mapGetters(['getArticlesList', 'getTagList']),
  },
}
</script>

<template>
  <div class="articles-list-block center">
    <article class="articles-list-block__left">
      <ArticlesListComponent v-if="articleId && !isFiltering"
                             :article="findArticleById(parseInt(articleId))"
                             :class="{ selectedArticle: true }"/>
      <ArticlesListComponent :style="{ display:'none' }"
                             v-for="(article, index) in getArticlesList"
                             :key="index" :article="article"/>
    </article>
    <article class="articles-list-block__right">
      <h3 class="articles-list-block__right_title">Tags</h3>
      <div class="articles-list-block__right_tags">
        <TagComponent v-for="(tag, index) in getTagList" :key="index" :tag="tag" :filterFunction="filterArticles"/>
      </div>
    </article>
  </div>
</template>

<style scoped lang="scss">
.blog-main {
  background-image: url(assets/img/articles-main.png);
  height: 356px;
  background-repeat: no-repeat;
  background-position: center;
  padding-left: calc(50% - 960px);
  padding-right: calc(50% - 960px);
  margin-bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  &-details {
    background-image: url(assets/img/blog_details_main.png);
  };
  &__text {
    padding: 41px 78px;
    background-color: rgb(255, 255, 255);
    border-radius: 37px 37px 0px 0px;

    &_title {
      color: rgb(41, 47, 54);
      font-family: DM Serif Display;
      font-size: 50px;
      font-weight: 400;
      line-height: 125%;
    };
    &_desc {
      color: rgb(77, 80, 83);
      font-family: Jost;
      font-size: 22px;
      font-weight: 400;
      line-height: 150%;
      text-align: center;
    };
  };
};
.articles-list-block {
  display: flex;
  gap: 52px;
  margin-bottom: 96px;

  &__left {
    max-width: 800px;
  };
  &__right {

    &_title {
      color: rgb(41, 47, 54);
      font-family: DM Serif Display;
      font-size: 25px;
      font-weight: 400;
      line-height: 125%;
      margin-bottom: 24px;
    };
    &_tags {
      display: flex;
      flex-wrap: wrap;
      row-gap: 11px;
      column-gap: 10px;
    }
  }
};

</style>
