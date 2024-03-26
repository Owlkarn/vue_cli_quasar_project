<script>
import ButtonWithArrowComponent from "components/UI/ButtonWithArrowComponent.vue";

export default {
  name: "ArticlesAndNewsComponent",
  components: {ButtonWithArrowComponent},
  props: ['articlesAndNewsOptions', 'articlesAndNews'],
  data() {
    return {
    };
  },
  methods: {
    goToBlogDetails(articleTag, articleId) {
      this.$router.push({ name: 'blog_details', params: { tag: articleTag, id: articleId } });
  }
  },
  computed: {
    displayedArticles() {
      return this.articlesAndNews.slice(0, this.articlesAndNewsOptions.numberOfTitles);
    }
  }
}
</script>

<template>
  <div class="articles-block center">
    <h2 :style="{ textAlign: articlesAndNewsOptions.titleAlign }" class="articles-block__title">Articles & News</h2>
    <p v-if="articlesAndNewsOptions.isSubtitle" class="articles-block__text">
      It is a long established fact that a reader will be distracted by the of readable content<br> of a page when lookings at its layouts the points of using.
    </p>
    <div class="articles-block__articles">
      <article v-for="(article, index) in displayedArticles" :key="index" class="articles-block__article">
        <div class="article__design">
          <div class="article__design_img" :style="{ backgroundImage: `url(${article.backgroundImg})` }">
            <p class="article__design_name">{{ article.name }}</p>
          </div>
        </div>
        <h3 class="article__title">{{ article.title }}</h3>
        <div class="article__date-and-btn">
          <p class="article__date-and-btn_date">{{ article.date }}</p>
          <ButtonWithArrowComponent class="article__date-and-btn_btn"
                                    @click="goToBlogDetails(article.tag, article.articleId)"/>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped lang="scss">
.articles-block {
  margin-bottom: 96px;
  &__title {
    color: rgb(41, 47, 54);
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    text-align: center;
    margin-bottom: 12px;

    &_blog {
      margin-bottom: 30px;
      text-align: left;
    }
  };

  &__text {
    color: rgb(77, 80, 83);
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    text-align: center;
    margin-bottom: 52px;
  };

  &__articles {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(calc(33.33% - 20px), 1fr));
    gap: 30px 28px;

    &.blog-articles {
      margin-bottom: 51px;
    };
  };
  &__article {
    height: 521px;
    padding: 21px;
    border: 1px solid rgb(231, 231, 231);
    border-radius: 62px;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    transition: background-color 0.3s ease;
  };
  &__article:hover {
    background: rgb(244, 240, 236);
  };
  &__article:hover .article__date-and-btn_btn {
    background: rgb(255, 255, 255);
  };
};
.article {
  &__design {
    &_img {
      width: 340px;
      height: 290px;
      padding-top: 228px;
      padding-left: 20px;
      margin-bottom: 13px;
    };
    &_name {
      border-radius: 8px 8px 8px 0px;
      background: rgb(255, 255, 255);
      width: 124px;
      height: 41px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgb(77, 80, 83);
      font-family: Jost;
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
      text-transform: capitalize;
    };
  };
  &__title {
    margin-bottom: 18px;
    color: rgb(41, 47, 54);
    font-family: DM Serif Display;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    width: 81%;
  };
  &__date-and-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &_date {
      color: rgb(77, 80, 83);
      font-family: Jost;
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
      text-align: left;
      text-transform: capitalize;
    };
    &_btn {
      transition: background-color 0.3s ease;
    }
  };
};
</style>
