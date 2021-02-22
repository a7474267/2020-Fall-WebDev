<template>
  <div class="carousel">
    <div class="carousel__item--active">
      <img :src="carouselImg[initialImg]"
           class="img-cover rounded w-100" />
    </div>
    <ul class="carousel__inner d-flex list-unstyled flex-wrap
    justify-content-between justify-content-lg-start">
      <li v-for='(img, index) in carouselImg'
          :key="index">
        <img :src="img"
             class="carousel__item img-cover mr-lg-2 rounded"
             @click.prevent="changeImg(index)">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    carouselImg: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      initialImg: 0,
    };
  },
  methods: {
    changeImg(index) {
      this.initialImg = index;
    },
  },
};
</script>
