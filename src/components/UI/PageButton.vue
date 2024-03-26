<script>
export default {
  name: "PageButton",
  props:['textInBtn']
}
</script>

<template>
  <button class="page-buttons_btn" v-html="textInBtn"></button>
</template>

<style scoped lang="scss">
.page-buttons {
  &_btn {
    border: 1px solid rgb(205, 162, 116);
    border-radius: 50%;
    width: 52px;
    height: 52px;
    background: rgb(255, 255, 255);
    color: rgb(41, 47, 54);
    font-family: Jost;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    transition: background-color 0.3s ease;
    &.active-page-btn {
      background: rgb(244, 240, 236);
      border: none;
    };
  };
  &_btn:hover {
    background: rgb(244, 240, 236);
    border: none;
  };
};
</style>
