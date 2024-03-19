<script>
export default {
  name: "ArticlesListComponent",
  props: {
    article: Object,
  }
}
</script>

<template>
  <article class="articles-list__article">
    <h3 class="articles-list__article_title">{{ article.firstTitle }}</h3>
    <img class="articles-list__article_img" :src="article.firstImg">
    <div class="articles-list__article_date-n-path">
      <p class="articles-list__article_date">{{ article.date }}</p>
      <p class="articles-list__article_path">Interior / Home / Decore</p>
    </div>
    <p class="articles-list__article_paragraph">{{ article.firstParagraph }}</p>
    <p v-if="article.secondParagraph" class="articles-list__article_paragraph">{{ article.secondParagraph }}</p>
    <div v-if="article.quote" class="articles-list__article_quote">
      <p class="articles-list__article_quote-symbol">“</p>
      <p class="articles-list__article_quote-text">The details are not the details. They make the design.</p>
    </div>
    <h3 v-if="article.secondTitle" class="articles-list__article_title">{{ article.secondTitle }}</h3>
    <p v-if="article.thirdParagraph" class="articles-list__article_paragraph">{{ article.thirdParagraph }}</p>
    <div v-if="article.paragraphList">
      <div v-for="(paragraph, index) in article.paragraphList" :key="index" class="articles-list__article_paragraph-list">
        <p class="articles-list__article_paragraph-number">{{ index+1 }}</p>
        <p class="articles-list__article_paragraph">{{ paragraph }}</p>
      </div>
    </div>
    <img v-if="article.secondImg" class="articles-list__article_img" :src="article.secondImg">
    <p v-if="article.fourthParagraph" class="articles-list__article_paragraph">{{ article.fourthParagraph }}</p>
  </article>
</template>

<style lang="scss" scoped>
.articles-list {

  &__article {
    margin-bottom: 90px;
    &_title {
      color: rgb(41, 47, 54);
      font-family: DM Serif Display;
      font-size: 50px;
      font-weight: 400;
      line-height: 125%;
      margin-bottom: 21px;
    };
    &_img {
      margin-bottom: 46px;
      max-width: 100%;
      height: auto;
    };
    &_date-n-path {
      display: flex;
      gap: 409px;
      margin-bottom: 48px;
    };
    &_date, &_path {
      color: rgb(77, 80, 83);
      font-family: Jost;
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
    };
    &_paragraph {
      color: rgb(77, 80, 83);
      font-family: Jost;
      font-size: 22px;
      font-weight: 400;
      line-height: 150%;
      margin-bottom: 35px;
    };
    &_quote {
      margin-bottom: 27px;
      position: relative;
      border-radius: 50px;
      background: rgb(244, 240, 236);
      color: rgb(205, 162, 116);
      font-family: DM Serif Display;
      font-style: italic;
      font-size: 200px;
      font-weight: 400;
      line-height: 125%;
      text-align: center;
      padding: 53px 227px 53px 227px;
      height: 267px;
    };
    &_quote-text {
      line-height: 125%;
      font-size: 25px;
      width: 345px;
      height: 70px;
      margin-top: 91px;
    }
    &_quote-symbol {
      position: absolute;
      transform: rotate(-180.00deg);
      height: 133px;
      left: 364px;
    };
    &_paragraph-list {
      display: flex;
      gap: 14px;
    };
    &_paragraph-number {
      color: rgb(205, 162, 116);
      font-family: DM Serif Display;
      font-size: 20px;
      font-weight: 400;
      line-height: 125%;
    }
  };
};
</style>