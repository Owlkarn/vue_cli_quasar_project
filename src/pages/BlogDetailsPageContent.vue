<script>
import MainBlogComponent from "components/UI/MainBlogComponent.vue";
import HeaderComponent from "components/UI/HeaderComponent.vue";
import FooterComponent from "components/UI/FooterComponent.vue";
import ArticleFilterBlockComponent from "components/UI/ArticleFilterBlockComponent.vue";
import {mapGetters} from "vuex";

export default {
  name: "BlogDetailsPageComponent",
  data() {
    return {
      articleId: this.$route.params.id,
      articleTag: this.$route.params.tag,
      //нужно в ArticleFilterBlockComponent передать id и
      // сделать там вывод статей так, что первой идет статья с переданным Id,
      // потом все остальные статьи с тэгом от этой статьи
    }
  },
  computed: {
    ...mapGetters(['getLargeMainImgs'])
  },
  components: {ArticleFilterBlockComponent, FooterComponent, HeaderComponent, MainBlogComponent}
}
</script>

<template>
  <HeaderComponent/>
  <MainBlogComponent :mainImg="getLargeMainImgs[1]"/>
  <ArticleFilterBlockComponent :articleId="articleId" :articleTag="articleTag"/>
  <FooterComponent/>
</template>

<style scoped lang="scss">

</style>
