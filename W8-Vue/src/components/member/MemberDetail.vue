<template>
  <div>
    <div class="d-flex align-items-center mb-8 mb-md-8 text-primary">
      <h2 class="font-weight-bold">會員資料</h2>
      <span class="material-icons">create</span>
    </div>
    <div class="d-flex align-items-center mt-3">
      <img :src="currentUser.avatar"
           alt="..."
           class="mr-3" />
      <h4 class="text-primary">{{ currentUser.name }}</h4>
    </div>
    <ul class="list-unstyled mt-5">
      <li class="mb-5">
        <div class="row">
          <div class="col-3 col-md-4 col-lg-3">電子信箱</div>
          <div class="col-9 col-md-8 col-lg-9 text-primary">
            {{ currentUser.email}}
          </div>
        </div>
      </li>
      <li class="mb-5">
        <div class="row">
          <div class="col-3 col-md-4 col-lg-3">聯絡電話</div>
          <div class="col-9 col-md-8 col-lg-9 text-primary">
            {{ currentUser.tel}}
          </div>
        </div>
      </li>
      <li class="mb-5">
        <div class="row">
          <div class="col-3 col-md-4 col-lg-3">性別</div>
          <div class="col-9 col-md-8 col-lg-4 text-primary">{{ currentUser.gender }}</div>
        </div>
      </li>
      <li>
        <div class="row">
          <div class="col-3 col-md-4 col-lg-3">聯絡地址</div>
          <div class="col-9 col-md-8 col-lg-9 text-primary">
            {{ currentUser.address}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
