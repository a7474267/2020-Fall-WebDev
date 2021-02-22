<template>
  <div>
    <div class="container-fluid d-md-none px-0">
      <div style="
      background-image: url('https://hexschool.github.io/webLayoutTraining1st/petpet-week8/homestay-1.png');
      height: 315px;
    "
           class="bg-center mb-2"></div>
    </div>
    <div class="container mb-2 my-md-14">
      <div class="row align-items-center">
        <div class="col-md-5 col-lg-4 d-flex flex-column
        justify-content-center text-center text-md-left">
          <h2 class="h3 h1-md text-primary font-weight-bold">寵物寄宿</h2>
          <h4 class="h5 h4-md text-primary font-weight-bold">
            給您的毛孩最舒適的環境
          </h4>
        </div>
        <div class="col-md-7 col-lg-8 d-none d-md-block">
          <div style="
          background-image: url('https://hexschool.github.io/webLayoutTraining1st/petpet-week8/homestay-1.png');
          height: 315px;
        "
               class="bg-center"></div>
        </div>
      </div>
    </div>
    <div class="bg-warning">
      <div class="container">
        <form class="py-2">
          <div class="row">
            <div class="col-3 col-md-2 col-lg-1 pr-0">
              <select class="custom-select mb-3 mb-md-0">
                <option disabled="disabled">品種</option>
                <option value="貓"
                        selected>貓</option>
                <option value="狗">狗</option>
              </select>
            </div>
            <div class="col-6 col-md-3 col-lg-2 pr-0">
              <select class="custom-select mb-3 mb-md-0">
                <option disabled="disabled">地區</option>
                <option value="台北">台北</option>
                <option value="台中">台中</option>
                <option value="高雄"
                        selected>高雄</option>
              </select>
            </div>
            <datePicker mode='range'
                        v-model="range"
                        :min-date="new Date()"
                        is-range
                        class="col-6 col-md-3 col-lg-2 px-2">
              <template v-slot="{ inputValue, inputEvents }">
                <input type="text"
                       :value="inputValue.start"
                       v-on="inputEvents.start"
                       class="form-control datepicker"
                       id="starDate"
                       placeholder="2020-11-20" />
              </template>
            </datePicker>
            <p class="mb-0 pt-2 d-none d-md-block">到</p>
            <datePicker mode='range'
                        v-model="range"
                        :min-date="new Date()"
                        is-range
                        class="col-6 col-md-3 col-lg-2 px-2">
              <template v-slot="{ inputValue, inputEvents }">
                <input type="text"
                       class="form-control"
                       :value="inputValue.end"
                       v-on="inputEvents.end"
                       id="endDate"
                       placeholder="2020-11-21" />
              </template>
            </datePicker>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import datePicker from 'v-calendar/lib/components/date-picker.umd';

export default {
  data() {
    return {
      range: {
        start: new Date(),
        end: new Date(),
      },
    };
  },
  components: {
    datePicker,
  },
};
</script>
