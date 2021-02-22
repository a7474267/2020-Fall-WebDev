<template>
  <div class="container mt-9 mt-lg-16">
    <h2 class="text-primary font-weight-bold">線上預約</h2>
    <p class="h5 text-primary mb-3">
      即時瞭解您的需求，安排最適合毛孩的寵物保姆！
    </p>
    <ul class="row no-gutters list-unstyled flex-md-nowrap">
      <li class="reservation__item card text-white col-md-4 bg-center darker
      mr-0 mr-md-1 mb-1 mb-md-0"
          style="background-image: url('https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-5.jpeg')">
        <router-link to="/homestay"
                     class="text-white">
          <div class="card-img-overlay d-flex align-items-center justify-content-center h-100">
            <h4 class="card-title font-weight-bold">寵物寄宿</h4>
          </div>
        </router-link>
      </li>
      <li class="reservation__item card text-white col-md-3 bg-center darker
      mr-0 mr-md-1 mb-1 mb-md-0"
          style="background-image: url('https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-6.jpeg')">
        <router-link to="/"
                     class="text-white">
          <div class="card-img-overlay d-flex align-items-center justify-content-center">
            <h4 class="card-title font-weight-bold">寵物美容</h4>
          </div>
        </router-link>
      </li>
      <li class="d-flex flex-column justify-content-between col-md-3 mr-0 mr-md-1 mb-1 mb-md-0">
        <div class="reservation__item card text-white bg-center darker mb-1"
             style="background-image: url('https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-7.jpeg')">
          <router-link to="/"
                       class="text-white">
            <div class="card-img-overlay d-flex align-items-center justify-content-center">
              <h4 class="card-title font-weight-bold">到府照顧</h4>
            </div>
          </router-link>
        </div>
        <div class="reservation__item card text-white bg-center darker"
             style="background-image: url('https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-8.jpeg')">
          <router-link to="/"
                       class="text-white">
            <div class="reservation__item card-img-overlay d-flex
            align-items-center justify-content-center">
              <h4 class="card-title font-weight-bold">遛狗保姆</h4>
            </div>
          </router-link>
        </div>
      </li>
      <li class="reservation__item card text-white col-md-2 bg-center darker"
          style="background-image: url('https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-3.jpeg')">
        <router-link to="/"
                     class="text-white">
          <div class="card-img-overlay d-flex align-items-center justify-content-center">
            <h4 class="card-title font-weight-bold">行為訓練</h4>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
