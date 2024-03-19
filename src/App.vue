<template>
  <router-view/>
</template>

<script setup>
import 'assets/fonts/stylesheet.css'

defineOptions({
  name: 'App',

  created() {
    this.$router.push({name: 'home'})
  }
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  max-width: 100%;
}

a {
  text-decoration: none;
}
.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

</style>
