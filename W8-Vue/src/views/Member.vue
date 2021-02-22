<template>
  <div>
    <Navbar :isAuth="true"
            :currentUserName="currentUser.name" />
    <main>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="row vh-100 align-items-center">
              <div class="col-md-6">
                <MemberDetail :currentUser="currentUser" />
              </div>
              <div class="col-md-6">
                <h3 class="h4 h3-lg mb-4 text-primary font-weight-bold">
                  Hi, {{ currentUser.name }}<br />
                  喜歡我們提供的服務嗎？<br />現在你也可以成為寵物保姆囉
                  <span class="d-none d-xl-inline">！</span>
                </h3>
                <div class="row mt-8 mt-lg-9">
                  <div class="col-lg-6">
                    <button type="button"
                            class="btn btn-secondary btn-block">
                      下一步
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import MemberDetail from '@/components/member/MemberDetail.vue';

const dummyUser = {
  currentUser: {
    id: 1,
    avatar:
      'https://hexschool.github.io/webLayoutTraining1st/petpet-week8/person-5.png',
    name: 'Joanne',
    email: 'cycample@gmail.com',
    tel: '0912-345-789',
    gender: '女',
    address: ' 高雄市鹽埕區七賢三路123號',
  },
};

export default {
  name: 'Member',
  data() {
    return {
      isAuth: true,
      currentUser: {
        id: -1,
        avatar: '',
        name: '',
        email: '',
        tel: '',
        gender: '',
        address: '',
      },
    };
  },
  components: {
    Navbar,
    MemberDetail,
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      const { currentUser } = dummyUser;
      this.currentUser = currentUser;
    },
  },
};
</script>
