<template>
  <div class="container">
    <ul class="row list-unstyled mt-9 mt-md-14 mt-lg-15">
      <li class="col-6 col-md-4 col-lg-3 mb-4"
          v-for="store in storeList"
          :key="store.id">
        <div class="card shadow-sm h-100">
          <img :src="store.imageUrl[0]"
               class="card-img-top topStore__img img-cover"
               alt="homestay" />
          <div class="card-body bg-light px-2">
            <h5 class="h6 card-title text-primary">{{ store.name }}</h5>
            <div class="d-flex align-items-center mb-2 text-star h6">
              <span class="material-icons"
                    v-for="rating in store.rating"
                    :key="rating">star</span>
            </div>
            <p class="card-text text-primary font-size-sm mb-3 mb-md-9">
              {{ store.service.join('、') }}
            </p>
          </div>
          <div class="card-footer d-flex bg-white p-0">
            <a href="#"
               class="w-50 d-block text-center hover-bg py-3">聯繫
            </a>
            <router-link :to="`/homestay/${ store.id }`"
                         class="w-50 d-block text-center text-secondary hover-bg py-3"
                         >預約
            </router-link>
          </div>
        </div>
      </li>
      <li class="col-6 col-md-4 col-lg-3 mb-4 d-none d-md-block d-lg-none">
        <div class="card shadow-sm h-100">
          <img src="https://hexschool.github.io/webLayoutTraining1st/petpet-week8/homestay-2.jpeg"
               class="card-img-top topStore__img img-cover"
               alt="..." />
          <div class="card-body bg-light px-2">
            <h5 class="card-title h6 text-primary">萌寵底家</h5>
            <div class="d-flex align-items-center mb-2 text-star h6">
              <span class="material-icons">star</span>
              <span class="material-icons">star</span>
              <span class="material-icons">star</span>
              <span class="material-icons">star</span>
              <span class="material-icons">star</span>
            </div>
            <p class="card-text text-primary font-xs mb-3 mb-md-9">
              寄宿、美容洗澡、到府保姆
            </p>
          </div>
          <div class="card-footer d-flex bg-white p-0">
            <a href="#"
               class="w-50 d-block text-center hover-bg py-3">聯繫</a>
            <a href="#"
               class="w-50 d-block text-center text-secondary hover-bg py-3">預約</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    storeList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
