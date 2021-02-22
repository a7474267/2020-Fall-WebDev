<template>
  <header class="header">
    <nav class="navbar navbar-expand-md bg-white fix-top-lg">
      <div class="container">
        <h1>
          <router-link class="navbar-brand logo ml-md-0 position-relative"
                       to="/">PETPET
          </router-link>
        </h1>
        <button class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="material-icons text-warning display-4"> menu </span>
        </button>
        <div class="collapse navbar-collapse justify-content-end"
             id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link text-primary text-center mr-0 mr-md-9"
                           to="/">預約服務
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-primary text-center mr-0 mr-md-9"
                           to="/">成為寵物保姆
              </router-link>
            </li>
            <template v-if="!isAuth">
              <li class="nav-item">
                <router-link class="nav-link text-primary text-center"
                             to="/login">登入
                </router-link>
              </li>
            </template>
            <template v-else>
              <li class="nav-item dropdown text-center">
                <a class="nav-link expandArrow"
                   href="#"
                   id="navbarDropdown"
                   role="button"
                   data-toggle="dropdown"
                   aria-haspopup="true"
                   aria-expanded="false">
                  Hi, {{ currentUserName }}
                  <span class="material-icons"> arrow_drop_down </span>
                </a>
                <div class="dropdown-menu"
                     aria-labelledby="navbarDropdown">
                  <router-link to="/"
                               class="dropdown-item text-primary
                               hover-bg text-center text-md-left">會員資料
                  </router-link>
                  <router-link to="/"
                               class="dropdown-item text-primary
                               hover-bg text-center text-md-left">預約查詢
                  </router-link>
                  <router-link to="/"
                               class="dropdown-item text-primary
                               hover-bg text-center text-md-left">歷史預約
                  </router-link>
                  <div class="dropdown-divider"></div>
                  <router-link to="/"
                               class="dropdown-item text-secondary
                               hover-bg text-center text-md-left">切換保母帳號
                  </router-link>
                </div>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    isAuth: {
      type: Boolean,
    },
    currentUserName: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>
