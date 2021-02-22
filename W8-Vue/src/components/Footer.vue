<template>
  <footer class="footer mt-auto bg-white position-relative"
          style="z-index: 101">
    <div class="container pt-md-14 pb-4">
      <div class="row justify-content-between mb-0 mb-md-14">
        <div class="d-none d-md-flex flex-md-column">
          <h3>
            <router-link to="/"
                         class="navbar-brand logo">PETPET
            </router-link>
          </h3>
          <ul class="list-unstyled d-none d-md-block">
            <li>
              <router-link to="/"
                           class="hover-underline">關於我們
              </router-link>
            </li>
            <li>
              <router-link to="/">幫助中心
              </router-link>
            </li>
            <li>
              <router-link to="/">使用條款</router-link>
            </li>
            <li>
              <router-link to="/">隱私政策</router-link>
            </li>
          </ul>
        </div>
        <div class="d-none d-md-flex flex-md-column">
          <h4 class="h5 text-primary font-weight-bold mb-4 py-2">寵物服務</h4>
          <ul class="list-unstyled">
            <li>
              <router-link to="/">寵物寄宿</router-link>
            </li>
            <li>
              <router-link to="/">寵物到府保姆</router-link>
            </li>
            <li>
              <router-link to="/">寵物美容洗澡</router-link>
            </li>
            <li>
              <router-link to="/">寵物行為訓練</router-link>
            </li>
          </ul>
        </div>
        <div class="d-none d-md-flex flex-md-column">
          <h4 class="h5 text-primary font-weight-bold py-2 mb-4">加入我們</h4>
          <ul class="list-unstyled">
            <li>
              <router-link to="/">成為寵物保姆</router-link>
            </li>
            <li>
              <router-link to="/">加入寵物計程車</router-link>
            </li>
            <li>
              <router-link to="/">專屬 APP 下載</router-link>
            </li>
            <li>
              <router-link to="/">相關合約條款</router-link>
            </li>
          </ul>
        </div>
        <div class="d-none d-md-flex flex-md-column">
          <h4 class="h5 text-primary font-weight-bold py-2 mb-4">聯繫我們</h4>
          <ul class="list-unstyled">
            <li>
              <a href="mailto:petpet@petmail.com">petpet@petmail.com</a>
            </li>
          </ul>
        </div>
        <div class="d-flex flex-column d-md-none px-3">
          <h3>
            <router-link to="/"
                         class="navbar-brand logo">PETPET</router-link>
          </h3>
          <h6 class="font-xs text-primary">
            Copyright © 2020 PetPet. All rights reserved.
          </h6>
        </div>
      </div>
      <div class="d-none d-md-flex mt-0 mt-mb-14">
        <h5 class="mr-auto">
          <span class="material-icons text-primary mr-2"> local_phone </span>
          <a href="tel+07-123-4567">07-123-4567</a>
        </h5>
        <h6 class="text-primary font-weight-normal font-size-sm">
          Copyright © 2020 PetPet. All rights reserved.
        </h6>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
