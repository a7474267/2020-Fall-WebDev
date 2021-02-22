<template>
  <div>
    <Navbar />
    <main>
      <div class="container-fluid login position-relative">
        <div class="row">
          <div class="col-lg-5 d-none d-lg-block bg-center position-absolute"
               style="
        background-image: url('https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-1.png');
        top: 0;
        bottom: 0;">
          </div>
        </div>
        <div class="container mt-5">
          <div class="row vh-100">
            <div class="offset-md-2 col-md-8 offset-lg-5 col-lg-7
            d-flex flex-column justify-content-md-center mt-2 mt-lg-0">
              <h2 class="text-primary mb-4 mb-md-14">登入</h2>
              <validation-observer v-slot="{ invalid }">
                <form action=""
                      @submit.stop.prevent="handleSubmit">
                  <div class="form-group">
                    <validation-provider rules="required|email"
                                         v-slot="{ errors, classes }">
                      <label for="userEmail">電子信箱</label>
                      <input type="email"
                             class="form-control"
                             id="userEmail"
                             name="email"
                             aria-describedby="emailHelp"
                             placeholder="Enter email"
                             v-model="userEmail"
                             :class="classes"
                             required />
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </validation-provider>
                  </div>
                  <div class="form-group">
                    <validation-provider rules="required"
                                         v-slot="{ errors, classes }">
                      <label for="userPassword">密碼</label>
                      <input type="password"
                             class="form-control"
                             id="userPassword"
                             name="password"
                             placeholder="Password"
                             v-model="userPassword"
                             :class="classes"
                             required />
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </validation-provider>
                    <a href="#"
                       class="text-muted font-xs">忘記密碼</a>
                  </div>
                  <div class="form-check custom-checkbox">
                    <input type="checkbox"
                           class="custom-control-input"
                           id="exampleCheck1" />
                    <label class="custom-control-label"
                           for="exampleCheck1">記住我的帳號</label>
                  </div>
                  <div class="d-flex my-4">
                    <div class="w-50 mr-1">
                      <button type="button"
                              class="btn btn-outline-dark btn-block">
                        <img src="https://hexschool.github.io/webLayoutTraining1st/petpet-week8/facebook.svg"
                             alt="" />
                        Facebook
                      </button>
                    </div>
                    <div class="w-50">
                      <button type="button"
                              class="btn btn-outline-dark btn-block">
                        <img src="https://hexschool.github.io/webLayoutTraining1st/petpet-week8/google.svg"
                             alt="" />
                        Google
                      </button>
                    </div>
                  </div>
                  <div class="row px-3 mt-md-11">
                    <button type="submit"
                            class="btn btn-primary col-lg-3"
                            :disabled="invalid">登入
                    </button>
                  </div>
                </form>
              </validation-observer>
              <a href="#">還沒註冊嗎？</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Toast from '@/utils/Toast';
import Navbar from '@/components/Navbar.vue';

export default {
  data() {
    return {
      userEmail: '',
      userPassword: '',
      isAuth: false,
    };
  },
  components: {
    Navbar,
  },
  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        email: this.userEmail,
        password: this.userPassword,
      });
      console.log('data', data);
      this.$router.push('/member');
      this.isAuth = true;
      Toast.fire({
        title: '登入成功',
        icon: 'success',
      });
    },
  },
};
</script>
