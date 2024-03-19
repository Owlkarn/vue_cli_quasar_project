<script>
export default {
  name: "LatestPostComponent",
  props: ['latestPostData'],
}
</script>

<template>
  <div class="latest-post center">
    <h1 class="latest-post__title">Latest Post</h1>
    <div class="latest-post__content">
      <img :src='latestPostData.img' alt="latest post" class="latest-post__content_img">
      <article class="latest-post__content_right">
        <h2 class="latest-post__content_subtitle">{{ latestPostData.title }}</h2>
        <p class="latest-post__content_text first-text">{{ latestPostData.textFirst }}</p>
        <p class="latest-post__content_text second-text">{{ latestPostData.textSecond }}</p>
        <div class="latest-post__content_date-and-btn">
          <p class="latest-post__date-and-btn_date">26 December,2022 </p>
          <button class="latest-post__date-and-btn_btn">
            <svg width="7.946899" height="15.379517" viewBox="0 0 7.9469 15.3795" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                Created with Pixso.
              </desc>
              <defs/>
              <path id="Vector" d="M1.00403 14.3755L6.9469 7.68976L1.00403 1.00409" stroke="#292F36" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped lang="scss">
.latest-post {
  margin-bottom: 172px;
  &__title {
    color: rgb(41, 47, 54);
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    text-align: left;
    margin-bottom: 27px;
  };
  &__content {
    display: flex;
    align-items: center;
    border: 1px solid rgb(231, 231, 231);
    border-radius: 62px;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    padding: 22px;
    gap: 65px;

    &_subtitle {
      color: rgb(41, 47, 54);
      font-family: DM Serif Display;
      font-size: 25px;
      font-weight: 400;
      line-height: 125%;
      margin-bottom: 22px;
      width: 92%;
    };
    &_text {
      color: rgb(77, 80, 83);
      font-family: Jost;
      font-size: 22px;
      font-weight: 400;
      line-height: 150%;
      margin-bottom: 41px;
    };
    &_date-and-btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  };
  &__date-and-btn {
    &_date {
      color: rgb(77, 80, 83);
      font-family: Jost;
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
    };
    &_btn {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      border: none;
      background: rgb(244, 240, 236);
    }
  }
}
</style>