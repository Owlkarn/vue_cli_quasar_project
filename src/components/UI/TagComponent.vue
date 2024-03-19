<script>
export default {
  name: "TagComponent",
  props: {
    tag: String,
    filterFunction: Function,
  },
  methods: {
    filterArticles(event) {
      this.filterFunction(event, this.tag );
    }
  },
}
</script>

<template>
  <div @click="filterArticles($event)" class="articles-list-block__right_tag">{{ tag }}</div>
</template>

<style lang="scss" scoped>
.articles-list-block__right_tag {
  color: rgb(41, 47, 54);
  font-family: Jost;
  font-size: 18px;
  font-weight: 400;
  line-height: 125%;
  text-align: center;
  padding: 9px 30px 9px 30px;
  border-radius: 10px;
  background: rgb(244, 240, 236);
  height: 41px;
  transition: background-color 0.3s ease;
};
.articles-list-block__right_tag-active {
  color: rgb(255, 255, 255);
  background: rgb(41, 47, 54);
  transition: background-color 0.3s ease;
}
</style>