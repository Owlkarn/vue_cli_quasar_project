<script>
import { ref } from 'vue'

export default {
  name: "CarouselComponent",
  setup () {
    return {
      slide: ref(1),
      fullscreen: ref(false),
      showNavigation: ref(false),
    }
  },
  props: ['projectData'],
  methods: {
    toggleFullscreen() {
      this.fullscreen = !this.fullscreen;
    }
  },
}
</script>

<template>
  <div class="q-pa-md center"
  >
  <q-carousel
    swipeable
    animated
    navigation
    arrows
    v-model="slide"
    v-model:fullscreen="fullscreen"
    infinite
    thumbnails
    @mouseenter="showNavigation=true"
    @mouseleave="showNavigation=true"
  >
    <q-carousel-slide :name="1" :img-src='this.projectData.imgUrl' />
    <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
    <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
    <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />

    <template v-slot:control>
      <transition name="fade">
        <q-carousel-control
          v-show="showNavigation"
        :offset="[18, 18]"
        >
        <q-btn
          class="btn-fullscreen"
          push round dense color="white" text-color="primary"
          :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="toggleFullscreen"
        />
        </q-carousel-control>
      </transition>
    </template>
  </q-carousel>
  </div>
</template>

<style scoped lang="scss">
.q-pa-md {
  margin-bottom: 200px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.q-carousel__control.absolute.absolute-bottom-right {

}

.q-btn--push {
  transform: translate(50%, 50%);
}
.q-carousel {
  min-height: 800px;
}
.btn-fullscreen {
  width: 30px;
  height: 30px;
}
.absolute-bottom-right {
  margin: 0;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
}
</style>
