<script>
export default {
  name: "MainBlogComponent",
  props: ['mainImg'],
}
</script>

<template>
  <div class="blog-main" :style="{ backgroundImage: `url(${mainImg.imgUrl})` }">
    <article v-if="mainImg.isTitle" class="blog-main__text">
      <h1 class="blog-main__text_title">{{ mainImg.title }}</h1>
      <p class="blog-main__text_desc">{{ mainImg.subtitle }}</p>
    </article>
  </div>
</template>

<style scoped lang="scss">
.blog-main {
  height: 356px;
  background-repeat: no-repeat;
  background-position: center;
  padding-left: calc(50% - 960px);
  padding-right: calc(50% - 960px);
  margin-bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  &__text {
    padding: 41px 78px;
    background-color: rgb(255, 255, 255);
    border-radius: 37px 37px 0px 0px;
    max-width: 504px;
    width: 100%;

    &_title {
      color: rgb(41, 47, 54);
      font-family: DM Serif Display;
      font-size: 50px;
      font-weight: 400;
      line-height: 125%;
      text-align: center;
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
</style>