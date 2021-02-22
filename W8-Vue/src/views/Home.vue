<template>
  <div>
    <navbar />
    <main role="main">
      <HomeBanner />
      <TopStore :topStore="topStore" />
      <Online />
      <FooterBanner />
      <BookingProcess />
    </main>
    <Subscribe />
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import HomeBanner from '@/components/home/HomeBanner.vue';
import TopStore from '@/components/TopStore.vue';
import Online from '@/components/home/Online.vue';
import FooterBanner from '@/components/home/FooterBanner.vue';
import BookingProcess from '@/components/home/BookingProcess.vue';
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
};

export default {
  name: 'Home',
  data() {
    return {
      topStore: [],
    };
  },
  created() {
    this.fetchTopStore();
  },
  components: {
    Navbar,
    HomeBanner,
    TopStore,
    Online,
    FooterBanner,
    BookingProcess,
    Subscribe,
    Footer,
  },
  methods: {
    fetchTopStore() {
      const { topStore } = dummyData;
      this.topStore = topStore;
    },
  },
};
</script>
