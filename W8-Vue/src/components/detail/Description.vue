<template>
  <ul class="offset-lg-6 col-md-7 col-lg-6 list-unstyled">
    <li>
      <h4 class="text-primary mb-2 font-weight-bold">關於</h4>
      <p class="h5 text-primary"
         v-html="homestayList.about">
      </p>
    </li>
    <li class="mt-5 mt-md-6 mt-lg-9">
      <h4 class="text-primary font-weight-bold">經歷</h4>
      <p class="h5 text-primary">
        {{ homestayList.experience }}
      </p>
    </li>
    <li class="mt-5 mt-md-6 mt-lg-9">
      <h4 class="text-primary font-weight-bold">技能證照</h4>
      <p class="h5 text-primary">{{ homestayList.license }}</p>
    </li>
    <li class="mt-5 mt-md-6 mt-lg-9">
      <h4 class="text-primary font-weight-bold">提供</h4>
      <p class="h5 text-primary">{{ homestayList.provide.join('、') }}</p>
    </li>
    <li class="mt-5 mt-md-6 mt-lg-9">
      <h4 class="text-primary font-weight-bold">毛孩活動範圍</h4>
      <p class="h5 text-primary">{{ homestayList.activityRange }}</p>
    </li>
    <li class="mt-5 mt-md-6 mt-lg-9">
      <h4 class="text-primary font-weight-bold">服務地區</h4>
      <p class="h5 text-primary">{{ homestayList.service_area }}</p>
    </li>
  </ul>
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
