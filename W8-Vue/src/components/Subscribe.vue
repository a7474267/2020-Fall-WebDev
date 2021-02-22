<template>
  <div class="jumbotron jumbotron-fluid bg-warning mt-14 mt-md-15 mb-0 position-relative"
       style="z-index: 101">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h2 class="mb-4 text-primary h4 h1-md">有任何我們能幫助您的嗎？</h2>
          <p class="h5-md text-primary font-weight-bold mb-3">
            輸入電子信箱 <br />
            將有專業人員在線幫您解決所有問題
          </p>
          <validation-provider class="input-group mb-3 "
                               rules="required|email"
                               v-slot="{classes }">
            <label for="email"
                   class="sr-only">Email</label>
            <input id="email"
                   type="email"
                   name="email"
                   v-model.trim="email"
                   placeholder="example@gmail.com"
                   aria-label="Your email address"
                   aria-describedby="SubscribeBtn"
                   class="form-control"
                   required
                   :class="classes">
            <div class="input-group-append">
              <button class="btn btn-secondary text-white px-14"
                      type="button"
                      @click.prevent="subscription">
                訂閱
              </button>
            </div>
          </validation-provider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import Toast from '@/utils/Toast';

export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    subscription() {
      if (this.email) {
        Swal.fire({
          icon: 'success',
          title: '感謝訂閱',
        });
      } else {
        Toast.fire({
          title: 'E-mail未填寫或格式錯誤',
          icon: 'error',
        });
      }
      this.email = '';
    },
  },
};
</script>
