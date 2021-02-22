<template>
  <div class="modal fade"
       id="reservationModal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered"
         role="document">
      <div class="modal-content p-3">
        <template v-if="!showResult">
          <validation-observer v-slot="{ invalid }">
            <div class="row timeline-section mx-2 d-md-none">
              <div class="col-4">
                <div class="timeline-point">
                  <p :class="{'timeline-point--active' : currentStep === 1}">預約項目</p>
                </div>
              </div>
              <div class="col-4">
                <div class="timeline-point">
                  <p :class="{'timeline-point--active' : currentStep === 2}">預約資料</p>
                </div>
              </div>
              <div class="col-4">
                <div class="timeline-point">
                  <p :class="{'timeline-point--active' : currentStep === 3}">付款資訊</p>
                </div>
              </div>
            </div>
            <h2 class="h5 text-primary d-lg-none font-weight-bold">預約項目</h2>
            <div class="row flex-lg-row flex-column-reverse
        justify-content-md-between align-items-center">
              <div class="col-lg-7">
                <h2 class="h4 text-primary mb-lg-7 mb-mb-5 d-none d-lg-block font-weight-bold">
                  預約項目
                </h2>
                <form action="">
                  <template v-if="currentStep === 1">
                    <ul class="service d-flex justify-content-between list-unstyled">
                      <li class="card service__item mr-2 service__item--select">
                        <div class="card-body d-flex flex-column
                  justify-content-center align-items-center">
                          <span class="h5 h1-md material-icons">house</span>
                          <p class="h6 h5-md text-nowrap">寄宿</p>
                        </div>
                      </li>
                      <li class="card service__item mr-2">
                        <div class="card-body d-flex flex-column
                  justify-content-center align-items-center text-muted">
                          <span class="h5 h1-md material-icons">wash</span>
                          <p class="h6 h5-md text-nowrap">美容</p>
                        </div>
                      </li>
                      <li class="card service__item mr-2">
                        <div class="card-body d-flex flex-column
                  justify-content-center align-items-center text-muted">
                          <span class="h5 h1-md material-icons">roofing</span>
                          <p class="h6 h5-md text-nowrap">到府保姆</p>
                        </div>
                      </li>
                      <li class="card service__item">
                        <div class="card-body d-flex flex-column
                  justify-content-center align-items-center text-muted">
                          <span class="h5 h1-md material-icons">directions_walk</span>
                          <p class="h6 h5-md text-nowrap">遛狗保姆</p>
                        </div>
                      </li>
                    </ul>
                    <label for="starDate">選擇日期</label>
                    <div class="form-row">
                      <div class="form-group col-md col-9">
                        <input type="text"
                               class="form-control"
                               value="2020-11-20"
                               id="starDate"
                               placeholder="2020-11-20" />
                      </div>
                      <p class="pt-2">至</p>
                      <div class="form-group col-md col-9">
                        <input type="text"
                               class="form-control"
                               value="2020-11-21"
                               id="endDate"
                               placeholder="2020-11-21" />
                      </div>
                      <p class="pt-2">共 1 晚</p>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-4 col-md-2">
                        <label for="petNum">毛孩數量</label>
                        <select id="petNum"
                                v-model="form.petNum"
                                class="form-control custom-select">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                      <div class="form-group col-4 col-md-4">
                        <label for="pet">您的毛孩是</label>
                        <select id="pet"
                                v-model="form.pet"
                                class="form-control custom-select">
                          <option value="貓">貓</option>
                          <option value="狗">狗</option>
                        </select>
                      </div>
                      <div class="form-group col-4 col-md-4">
                        <label for="petAge">年齡</label>
                        <select id="petAge"
                                v-model="form.petAge"
                                class="form-control custom-select">
                          <option value="1">1 歲</option>
                          <option value="2">2 歲</option>
                          <option value="3">3 歲</option>
                          <option value="4">4 歲</option>
                          <option value="5">5 歲</option>
                        </select>
                      </div>
                    </div>
                  </template>
                  <template v-if="currentStep === 2">
                    <div class="form-group">
                      <label for="petName">毛孩姓名</label>
                      <input type="text"
                             class="form-control"
                             id="petName"
                             v-model="form.petName"
                             placeholder="請輸入毛孩姓名" />
                    </div>
                    <div class="form-group">
                      <validation-provider rules="required"
                                           v-slot="{ errors, classes }">
                        <label for="customerName">飼主姓名</label>
                        <input type="text"
                               class="form-control"
                               id="customerName"
                               v-model="form.customerName"
                               placeholder="請輸入飼主姓名"
                               :class="classes"
                               required />
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                      </validation-provider>
                    </div>
                    <div class="form-group">
                      <validation-provider rules="required|email"
                                           v-slot="{ errors, classes }">
                        <label for="customerEmail">Email</label>
                        <input type="email"
                               class="form-control"
                               id="customerEmail"
                               aria-describedby="emailHelp"
                               placeholder="example@gmail.com"
                               v-model="form.customerEmail"
                               :class="classes"
                               required />
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                      </validation-provider>
                    </div>
                    <div class="form-group">
                      <validation-provider rules="required"
                                           v-slot="{ errors, classes }">
                        <label for="customerPhone">聯絡電話</label>
                        <input type="tel"
                               class="form-control"
                               id="customerPhone"
                               placeholder="0912-345-678"
                               v-model="form.customerPhone"
                               :class="classes"
                               required />
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                      </validation-provider>
                    </div>
                  </template>
                  <template v-if="currentStep === 3">
                    <div class="form-group">
                      <validation-provider rules="required"
                                           v-slot="{ errors, classes }">
                        <input type="text"
                               class="form-control"
                               id="creditCardNum"
                               placeholder="Xxxx-xxxx-xxxx-xxxx"
                               v-model="form.creditCardNum"
                               :class="classes"
                               required />
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                      </validation-provider>
                    </div>
                    <div class="form-group">
                      <validation-provider rules="required"
                                           v-slot="{ errors, classes }">
                        <label for="effectiveDate">有效日期</label>
                        <input type="text"
                               class="form-control"
                               id="effectiveDate"
                               placeholder="(MM/YY)"
                               v-model="form.effectiveDate"
                               :class="classes"
                               required />
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                      </validation-provider>
                    </div>
                    <div class="form-group">
                      <validation-provider rules="required"
                                           v-slot="{ errors, classes }">
                        <label for="securityCode">安全碼</label>
                        <input type="text"
                               class="form-control"
                               id="securityCode"
                               placeholder="***"
                               v-model="form.securityCode"
                               :class="classes"
                               required />
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                      </validation-provider>
                    </div>
                  </template>
                </form>
              </div>
              <div class="col-lg-5">
                <div class="d-flex flex-md-row flex-lg-column
            align-items-md-center align-items-lg-start">
                  <div class="store__img bg-center rounded mb-4 mb-md-5
                  mb-lg-2 mr-2 mr-md-6 mr-lg-0"
                       :style="{ backgroundImage: `url(${ img[0] })` }">
                  </div>
                  <div class="d-flex flex-column">
                    <div class="d-flex flex-md-row flex-column align-items-md-center mb-2 mb-lg-0">
                      <h2 class="h5 text-primary font-weight-bold">{{ name }}</h2>
                      <div class="d-flex text-star">
                        <span class="material-icons"
                              v-for="rating in rating"
                              :key="rating">star</span>
                      </div>
                    </div>
                    <div class="d-flex">
                      <span class="material-icons text-secondary">place</span>
                      <p class="text-primary">高雄市苓雅區、新興區、前鎮區</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row flex-lg-row flex-column justify-content-between
        align-items-lg-end align-items-center mt-5">
              <div class="col-lg-7 d-none d-md-block">
                <div class="row timeline-section">
                  <div class="col-4">
                    <div class="timeline-point">
                      <p :class="{'timeline-point--active' : currentStep === 1}">預約項目</p>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="timeline-point">
                      <p :class="{'timeline-point--active' : currentStep === 2}">預約資料</p>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="timeline-point">
                      <p :class="{'timeline-point--active' : currentStep === 3}">付款資訊</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-10 col-lg-5">
                <div class="row flex-column flex-lg-column flex-md-row
            justify-content-md-end justify-content-center align-items-center">
                  <a href="#"
                     class="col-11 col-md-2 col-lg-12 text-center mr-lg-0
                 mr-md-3 mb-5 mb-mb-0 mb-lg-mb-5 text-secondary"
                     @click.prevent="prev()"
                     v-if="currentStep > 1">返回</a>
                  <button type="button"
                          class="col-11 col-md-6 col-lg-11 btn btn-secondary d-block"
                          @click.prevent="next()"
                          :disabled="invalid">
                    下一步
                  </button>
                </div>
              </div>
            </div>
          </validation-observer>
        </template>
        <template v-if="showResult">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="d-flex flex-column justify-content-center align-items-center vh-100">
                <span class="material-icons display-2 text-star">pets</span>
                <h2 class="h4 text-primary font-weight-bold">預約成功!</h2>
                <p class="text-primary">
                  您可以在會員頁找到您的預約資料並修改或取消預約。
                </p>
                <button type="button"
                        @click.prevent="submitForm()"
                        class="btn btn-secondary btn-block">
                  前往會員頁
                </button>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  props: {
    img: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      currentStep: 1,
      showResult: false,
      form: {
        petNum: '1',
        pet: '貓',
        petAge: '1',
        petName: '',
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        creditCardNum: '',
        effectiveDate: '',
        securityCode: '',
      },
    };
  },
  methods: {
    next() {
      if (this.currentStep > 2) {
        this.showResult = true;
      } else {
        this.currentStep += 1;
      }
    },
    prev() {
      if (this.currentStep > 1) {
        this.currentStep -= 1;
      }
    },
    submitForm() {
      this.$router.push('/login');
      $('#reservationModal').modal('hide');
    },
  },
};
</script>
