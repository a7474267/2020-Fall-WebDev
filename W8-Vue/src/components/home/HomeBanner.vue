<template>
  <div class="container position-relative">
    <div class="row flex-column flex-lg-row justify-content-center align-items-center">
      <div class="col-lg-5 banner__bg bg-center mb-2 mb-lg-0"
           style="background-image: url('https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-1.png')"></div>
      <div class="col-md-7 col-lg-7">
        <h2 class="h3 h2-md h1-lg text-center text-md-left text-primary font-weight-bold">
          寵物服務，盡在 PETPET
        </h2>
        <h4 class="d-none d-lg-block text-primary font-weight-bold">
          當您的毛孩有需要時，幫您找到最合適的服務者！
        </h4>
        <h4 class="d-lg-none text-primary h5 text-center text-md-left">
          當您的毛孩有需要時，<br />幫您找到最合適的服務者！
        </h4>
        <form action=""
              class="mx-3 mb-md-15">
          <div class="row d-flex flex-column flex-lg-row">
            <select class="custom-select col-lg-2 mb-2 mb-lg-0">
              <option selected>品種</option>
              <option value="貓">貓</option>
              <option value="狗">狗</option>
            </select>
            <select class="custom-select col-lg-4 mb-2 mb-lg-0">
              <option selected>服務</option>
              <option value="寵物寄宿">寵物寄宿</option>
              <option value="寵物美容">寵物美容</option>
              <option value="到府照顧">到府照顧</option>
              <option value="遛狗保姆">遛狗保姆</option>
              <option value="行為訓練">行為訓練</option>
            </select>
            <select class="custom-select col-lg-4 mb-2 mb-lg-0">
              <option selected>地區</option>
              <option value="台北">台北</option>
              <option value="台中">台中</option>
              <option value="高雄">高雄</option>
            </select>
            <button type="button"
                    class="btn btn-secondary col-lg-2">搜尋</button>
          </div>
        </form>
        <div class="d-lg-flex justify-content-lg-end d-none mt-lg-16
        position-absolute"
             style="right: 15px;">
          <router-link :to="{ path: '/', hash: '#popular' }">
            <span class="material-icons arrow-down text-secondary display-3">
              arrow_drop_down_circle
            </span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="d-md-flex justify-content-md-end mt-5 d-none d-lg-none">
      <router-link :to="{ path: '/', hash: '#popular' }">
        <span class="material-icons arrow-down text-secondary display-3">
          arrow_drop_down_circle
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
