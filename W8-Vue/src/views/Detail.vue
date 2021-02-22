<template>
  <div>
    <Navbar />
    <main role="main">
      <div class="container mt-lg-17">
        <div class="row flex-md-row flex-column-reverse justify-content-md-between">
          <div class="col-md-7 col-lg-6">
            <div class="fix-left-lg">
              <Introduction :homestayList=" homestayList" />
              <div class="row mt-lg-14 mt-6 px-3">
                <button type="button"
                        class="col-5 col-md-5 col-lg-4 btn btn-outline-secondary mr-3">
                  聯繫
                </button>
                <button type="button"
                        class="col-5 col-md-6 col-lg-6 btn btn-secondary"
                        @click.prevent="openFormModal()">
                  立刻預約
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-5 col-lg-6 mb-lg-18">
            <DetailImg :carouselImg="homestayList.imageUrl" />
          </div>
        </div>
        <div class="row mt-9 mt-md-14 mt-lg-18">
          <Description :homestayList=" homestayList" />
        </div>
        <div class="row mt-9 mt-md-14 mt-lg-16">
          <div class="offset-lg-6 col-lg-6">
            <h3 class="text-primary font-weight-bold mb-4">飼主評論（30）</h3>
            <Comments :comments="homestayList.comments" />
            <div class="d-flex justify-content-end mt-2">
              <a href="#">查看更多</a>
            </div>
          </div>
        </div>
        <div class="row mt-9 mt-md-14 mt-lg-15">
          <div class="offset-lg-6 col-lg-6">
            <h3 class="text-primary mb-4">
              其他<a href="#"
                 class="text-secondary"><u>高雄市</u></a>&nbsp;&nbsp;
              <a href="boarding.html"
                 class="text-secondary"><u>寄宿</u></a>
              的寵物保姆
            </h3>
            <Related :homestayListId="homestayList.id" />
          </div>
        </div>
      </div>
      <FormModal ref="reservationModal"
                 :img="homestayList.imageUrl"
                 :name="homestayList.name"
                 :rating="homestayList.rating" />
    </main>
    <Subscribe />
    <Footer />
  </div>
</template>

<script>
import $ from 'jquery';
import Navbar from '@/components/Navbar.vue';
import Introduction from '@/components/detail/Introduction.vue';
import DetailImg from '@/components/detail/DetailImg.vue';
import Description from '@/components/detail/Description.vue';
import Comments from '@/components/detail/Comments.vue';
import Related from '@/components/detail/Related.vue';
import FormModal from '@/components/detail/FormModal.vue';
import Subscribe from '@/components/Subscribe.vue';
import Footer from '@/components/Footer.vue';

const dummyData = {
  homestayList: {
    id: 2,
    name: '毛孩好家',
    service: ['寄宿', '美容洗澡', '到府保姆'],
    rating: 5,
    category: '貓',
    imageUrl: [
      'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/homestay-3.jpeg',
      'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/index-5.jpeg',
      'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/detail-1.jpeg',
      'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/detail2.jpeg',
    ],
    serviceList: ['寄宿', '美容洗澡', '到府保姆'],
    serviceDeatil: [
      {
        item: '寄宿',
        price: 450,
        description: null,
      },
      {
        item: '美容洗澡',
        price: 500,
        description: '含剪指甲、剃腳底毛、清耳朵',
      },
      {
        item: '到府保姆',
        price: 550,
        description: null,
      },
    ],
    address: '高雄市鹽埕區七賢三路123號',
    service_area: '高雄市 全區 ',
    about:
      '家中有5隻貓寶貝，對貓咪有瘋狂的熱愛 。<br>目前已經照顧超過30位狗狗貓咪朋友！對於我來說，能夠與你們相遇都是緣分！',
    experience: '曾接手過數次奶貓，照顧後送養成功，目前都是健健康康的毛孩。',
    license: '寵物美容丙級技術證',
    provide: ['貓砂盆', '罐頭', '乾飼料'],
    activityRange: '想去的任何地方',
    comments: [
      {
        name: '葉子',
        imgUrl:
          'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/person-4.png',
        create_time: 'Oct 17 2020',
        rating: 5,
        content: '服務很秋！',
      },
      {
        name: 'Joanne',
        imgUrl:
          'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/person-5.png',
        create_time: 'Oct 17 2020',
        rating: 5,
        content: '貓完全不想回家了。',
      },
      {
        name: 'Ray',
        imgUrl:
          'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/person-6.png',
        create_time: 'Oct 17 2020',
        rating: 5,
        content: '超喜歡超棒超讚的...',
      },
      {
        name: '穎旻',
        imgUrl:
          'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/person-7.png',
        create_time: 'Oct 17 2020',
        rating: 5,
        content: '下次還會麻煩您～',
      },
      {
        name: '俊儀',
        imgUrl:
          'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/person-8.png',
        create_time: 'Oct 17 2020',
        rating: 5,
        content: '讚的！',
      },
      {
        name: '子琪',
        imgUrl:
          'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/person-9.png',
        create_time: 'Oct 17 2020',
        rating: 5,
        content: '服務很棒耶哈哈哈！',
      },
    ],
  },
};

export default {
  data() {
    return {
      homestayList: {
        id: -1,
        name: '',
        service: [],
        rating: -1,
        category: '',
        area: '',
        imageUrl: [],
        serviceList: [],
        serviceDeatil: [],
        address: '',
        service_area: '',
        about: '',
        experience: '',
        license: '',
        provide: [],
        activityRange: '',
        comments: [],
      },
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
      currentStep: 1,
    };
  },
  components: {
    Navbar,
    Introduction,
    DetailImg,
    Description,
    Comments,
    Related,
    FormModal,
    Subscribe,
    Footer,
  },
  created() {
    const { id } = this.$route.params;
    this.fetchhomestayList(id);
  },
  methods: {
    fetchhomestayList(id) {
      console.log('homestayList id: ', id);
      const { homestayList } = dummyData;
      this.homestayList = homestayList;
    },
    openFormModal() {
      this.$refs.reservationModal.form = {
        petNum: '1',
        pet: '貓',
        petAge: '1',
      };
      this.$refs.reservationModal.currentStep = 1;
      $('#reservationModal').modal('show');
    },
  },
};
</script>
