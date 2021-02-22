<template>
  <div>
    <div class="d-flex align-items-center mb-3 mt-9 mt-md-0">
      <h2 class="text-primary font-weight-bold mr-3">{{ homestayList.name }}</h2>
      <div class="d-flex text-star h5">
        <span class="material-icons"
              v-for="rating in homestayList.rating"
              :key="rating">star</span>
      </div>
    </div>
    <h3 class="h5 h4-lg text-primary font-weight-bold">
      給予毛孩最舒適的環境是我們的職責！
    </h3>
    <p class="text-primary">已提供 52 筆服務、並獲得 30 個評價</p>
    <div class="mt-6 mt-lg-14">
      <h4 class="h5 text-primary font-weight-bold mb-3">服務內容</h4>
      <ul class="list-unstyled">
        <li class="mb-2 text-primary">
          {{ homestayList.serviceDeatil[0].item }}
          NT$ {{ homestayList.serviceDeatil[0].price }} /晚
        </li>
        <li class="mb-2">
          <p class="mb-0 text-primary">
            {{ homestayList.serviceDeatil[1].item }}
            NT$ {{ homestayList.serviceDeatil[1].price }}
            NT$ {{ homestayList.serviceDeatil[1].description }}
          </p>
          <span class="font-size-sm text-secondary">個性貓另加價</span>
        </li>
        <li class="text-primary">
          {{ homestayList.serviceDeatil[2].item }}
          NT$ {{ homestayList.serviceDeatil[2].price }} /晚</li>
      </ul>
    </div>
    <div class="d-flex mt-lg-9 mt-6">
      <span class="material-icons text-secondary h5">place</span>
      <p class="text-primary">
        {{ homestayList.address }}<br />服務區域：{{ homestayList.service_area }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    homestayList: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
