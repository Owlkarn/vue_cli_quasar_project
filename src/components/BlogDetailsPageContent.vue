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
  <ArticleFilterBlockComponent/>
  <FooterComponent/>
</template>

<style scoped lang="scss">

</style>
