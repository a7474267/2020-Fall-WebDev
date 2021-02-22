<template>
  <div>
    <Navbar />
    <main role="main">
      <ServiceBanner />
      <TopStore :topStore="topStore" />
      <ServiceStore :storeList="storeList" />
      <Pagination :totalPage="totalPage"/>
    </main>
    <Subscribe />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ServiceBanner from '@/components/service/ServiceBanner.vue';
import TopStore from '@/components/TopStore.vue';
import ServiceStore from '@/components/service/ServiceStore.vue';
import Pagination from '@/components/Pagination.vue';
import Subscribe from '@/components/Subscribe.vue';
import Footer from '@/components/Footer.vue';

const dummyData = {
  topStore: [
    {
      id: 1,
      name: 'Jamie',
      service: '寄宿、美容、寵物行為訓練',
      comment: 198,
      complete: 580,
      imageUrl: [
        'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-2.jpeg',
      ],
      avatarImg:
        'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/person-1.png',
    },
    {
      id: 2,
      name: 'Eric',
      service: '寄宿、美容',
      comment: 76,
      complete: 208,
      imageUrl: [
        'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-3.jpeg',
      ],
      avatarImg:
        'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/person-2.png',
    },
    {
      id: 3,
      name: 'Yvonne',
      service: '美容、寵物行為訓練',
      comment: 52,
      complete: 196,
      imageUrl: [
        'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-4.jpeg',
      ],
      avatarImg:
        'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/person-3.png',
    },
  ],
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
  totalPage: [1, 2, 3],
};

export default {
  data() {
    return {
      topStore: [],
      storeList: [],
      totalPage: [],
    };
  },
  components: {
    Navbar,
    ServiceBanner,
    TopStore,
    ServiceStore,
    Pagination,
    Subscribe,
    Footer,
  },
  created() {
    this.fetchTopStore();
    this.fetchStoreList();
  },
  methods: {
    fetchTopStore() {
      const { topStore } = dummyData;
      this.topStore = topStore;
    },
    fetchStoreList() {
      const { storeList, totalPage } = dummyData;
      this.storeList = storeList;
      this.totalPage = totalPage;
    },
  },
};
</script>
