<template>
  <div class="container mt-14 mt-md-16"
       id="popular">
    <h2 class="title text-primary font-weight-bold">本月熱門保姆</h2>
    <p class="mb-2 text-primary">即時瞭解您的需求，安排最適合毛孩的寵物保姆！</p>
    <ul class="list-unstyled d-md-none"
        v-for="store in topStore"
        :key="store.id">
      <li class="card shadow-sm h-100">
        <div class="card-img-top bg-center"
             style="height: 120px;"
             :style="{ backgroundImage: `url(${ store.imageUrl[0] })` }"></div>
        <img :src="store.avatarImg"
             class="card__avatar"
             alt="avatar" />
        <div class="card-body text-center">
          <h3 class="h5 text-primary">{{ store.name }}</h3>
          <p class="mb-3 text-primary text-nowrap">
            {{ store.service }}
          </p>
          <button type="button"
                  class="btn btn-secondary px-15 mb-4">
            預約
          </button>
          <div class="row">
            <div class="col-6 flex-column">
              <p class="text-primary">獲得評價</p>
              <p class="h3 mt-3 text-primary text-center">
                {{ store.comment }}<sup>則</sup>
              </p>
            </div>
            <div class="col-6 flex-column">
              <p class="text-primary">已完成訂單</p>
              <p class="h3 mt-3 text-primary">{{ store.complete }} <sup>件</sup></p>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <swiper :options="swiperOption"
            class="d-none d-md-block px-1">
      <swiper-slide v-for="store in topStore"
                    :key="store.id">
        <div class="card shadow-sm h-100">
          <div class="card-img-top bg-center"
               style="height: 120px;"
               :style="{ backgroundImage: `url(${ store.imageUrl[0] })` }"></div>
          <img :src="store.avatarImg"
               class="card__avatar"
               alt="avatar" />
          <div class="card-body text-center">
            <h3 class="h5 text-primary">{{ store.name }}</h3>
            <p class="mb-3 text-primary text-nowrap">
              {{ store.service }}
            </p>
            <button type="button"
                    class="btn btn-secondary px-15 mb-4">
              預約
            </button>
            <div class="row">
              <div class="col-6 flex-column">
                <p class="text-primary">獲得評價</p>
                <p class="h3 mt-3 text-primary text-center">
                  {{ store.comment }} <sup>則</sup>
                </p>
              </div>
              <div class="col-6 flex-column">
                <p class="text-primary">已完成訂單</p>
                <p class="h3 mt-3 text-primary">{{ store.complete }} <sup>件</sup></p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev d-none"
           slot="button-prev">
      </div>
      <div class="swiper-button-next"
           slot="button-next">
        <span class="material-icons text-white h2 mb-0">arrow_right</span>
      </div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.min.css';

export default {
  props: {
    topStore: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      swiperOption: {
        speed: 900,
        allowTouchMove: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
        swiperOption: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
