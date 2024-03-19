<script>
export default {
  name: "PageButtons"
}
</script>

<template>
  <article class="page-buttons">
    <button class="page-buttons_btn page-btn-first active-page-btn">01</button>
    <button class="page-buttons_btn page-btn-second">02</button>
    <button class="page-buttons_btn page-btn-third">03</button>
    <button class="page-buttons_btn page-btn-next">
      <svg width="7.946907" height="15.379517" viewBox="0 0 7.94691 15.3795" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <desc>
          Created with Pixso.
        </desc>
        <defs/>
        <path id="Vector" d="M1.00406 14.3755L6.94691 7.68976L1.00406 1.00409" stroke="#292F36" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
      </svg>
    </button>
  </article>
</template>

<style scoped lang="scss">
.page-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 200px;
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