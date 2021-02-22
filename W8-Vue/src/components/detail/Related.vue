<template>
  <ul class="row list-unstyled">
    <li class="col-6 col-md-4 mb-4"
        v-for="store in related"
        :key="store.id">
      <div class="card shadow-sm h-100">
        <img :src="store.imageUrl[0]"
             class="card-img-top topStore__img img-cover"
             alt="..." />
        <div class="card-body bg-light px-2">
          <h5 class="card-title text-primary h6">{{ store.name }}</h5>
          <div class="d-flex align-items-center mb-2 text-star h6">
            <span class="material-icons"
                  v-for="rating in store.rating"
                  :key="rating">star</span>

          </div>
          <p class="card-text text-primary font-size-sm">
            {{ store.service.join('、') }}
          </p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
const dummyData = {
  storeList: [
    {
      id: 1,
      name: '寵屋屋',
      service: ['寄宿', '美容洗澡', '到府保姆'],
      rating: 5,
      category: '貓',
      area: '高雄',
      imageUrl: [
        'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/homestay-2.jpeg',
      ],
    },
    {
      id: 2,
      name: '毛孩好家',
      service: ['寄宿', '美容洗澡', '到府保姆'],
      rating: 5,
      category: '貓',
      area: '高雄',
      imageUrl: [
        'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/homestay-3.jpeg',
      ],
    },
    {
      id: 3,
      name: '妖貓X僕SS',
      service: ['寄宿', '美容洗澡'],
      rating: 5,
      category: '貓',
      area: '高雄',
      imageUrl: [
        'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/homestay-4.jpeg',
      ],
    },
    {
      id: 4,
      name: '貓是主我是僕',
      service: ['寄宿', '美容洗澡', '到府保姆'],
      rating: 5,
      category: '貓',
      area: '高雄',
      imageUrl: [
        'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/homestay-5.jpeg',
      ],
    },
    {
      id: 5,
      name: '汪汪隊',
      service: ['寄宿', '到府保姆', '寵物行為訓練'],
      rating: 5,
      category: '貓',
      area: '高雄',
      imageUrl: [
        'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/homestay-6.jpeg',
      ],
    },
    {
      id: 6,
      name: '卯咪',
      service: ['寄宿', '寵物行為訓練'],
      rating: 5,
      category: '貓',
      area: '高雄',
      imageUrl: [
        'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/homestay-7.jpeg',
      ],
    },
    {
      id: 7,
      name: '貓狗大戰',
      service: ['寄宿', '美容洗澡', '到府保姆'],
      rating: 5,
      category: '貓',
      area: '高雄',
      imageUrl: [
        'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-2.jpeg',
      ],
    },
    {
      id: 8,
      name: '萌寵底家',
      service: ['寄宿', '到府保姆'],
      rating: 5,
      category: '貓',
      area: '高雄',
      imageUrl: [
        'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/homestay-8.jpeg',
      ],
    },
  ],
};

export default {
  props: {
    homestayListId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      storeList: [],
    };
  },
  created() {
    this.fetchStoreList();
  },
  methods: {
    fetchStoreList() {
      const { storeList } = dummyData;
      this.storeList = storeList;
    },
  },
  computed: {
    related() {
      return this.storeList
        .filter((item) => item.id !== this.homestayListId)
        .slice(1, 7);
    },
  },
};
</script>
