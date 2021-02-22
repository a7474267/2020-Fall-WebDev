<template>
  <div class="container mt-9 mt-lg-16">
    <h2 class="text-primary font-weight-bold">預約流程</h2>
    <p class="h5 text-primary mb-2">輕鬆三步驟，立即獲取最佳服務！</p>
    <ul class="row list-unstyled">
      <li class="col-md-4 mb-7 mb-md-0"
          v-for="(process, index) in processes"
          :key="index">
        <p class="text-primary">{{ process.title }}</p>
        <img :src="process.processImg"
             alt="index-10"
             class="img-fluid w-100" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      processes: [
        {
          title: '1.查詢想要的服務',
          processImg:
            'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-10.png',
        },
        {
          title: '2.找到合適的保姆',
          processImg:
            'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-11.png',
        },
        {
          title: '3.填寫資料完成預約',
          processImg:
            'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-12.png',
        },
      ],
    };
  },
};
</script>
