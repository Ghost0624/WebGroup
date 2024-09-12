<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        WEBGROUP
      </router-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">
          Designed by Invision. Coded by Creative Tim
        </div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <router-link
        class="nav-link text-white"
        to="/dashboard"
      >
        <i class="now-ui-icons arrows-1_cloud-download-93"></i>
        <p>Dashboard</p>
      </router-link>
      <drop-down
        tag="li"
        title=" Login / SignUp"
        icon="now-ui-icons design_image"
        class="nav-item"
      >
        <nav-link to="/landing">
          <i class="now-ui-icons education_paper"></i> Landing
        </nav-link>
        <nav-link to="/login" v-if="token == ''">
          <i class="now-ui-icons users_circle-08"></i> Login
        </nav-link>
        <nav-link to="/signup" v-if="token == ''">
          <i class="now-ui-icons users_circle-08"></i> SignUp
        </nav-link>
        <nav-link to="/profile">
          <i class="now-ui-icons users_single-02"></i> Profile
        </nav-link>
        <n-button type="neutral" class="nav-link" @click="logout" v-if="token !== ''">
          <i class="now-ui-icons users_single-02"></i> LogOut
        </n-button>
      </drop-down>

      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Twitter"
          data-placement="bottom"
          href="https://twitter.com/CreativeTim"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
          <p class="d-lg-none d-xl-none">Twitter</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Facebook"
          data-placement="bottom"
          href="https://www.facebook.com/CreativeTim"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Instagram"
          data-placement="bottom"
          href="https://www.instagram.com/CreativeTimOfficial"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink, Button } from '@/components';
import axios from 'axios';
import { Popover } from 'element-ui';
import { mapGetters, mapActions } from 'vuex'; 

export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  watch: {
    "$store.state.token": function (newVal) {
      this.token = newVal;
    },
  },
  components: {
    DropDown,
    Navbar,
    NavLink,
    [Popover.name]: Popover,
    [Button.name]: Button,
  },
  data() {
    return {
      token: this.$store.state.token
    }
  },
  methods: {
    logout() {
      axios.post("/api/logout")
      .then(res => {
        localStorage.removeItem('token')
        this.$store.dispatch('logout');  
        this.$router.push('/login');
      })
      .catch (err => {
      })
    }
  },
  created() {
    axios.post("/api/refresh")
    .then(res => {
      if(res.data.ok == false) {
        if (this.$route.path !== '/login') {
          this.$router.push('/login');
          localStorage.removeItem('token')
        }  
      } else {
        localStorage.setItem('token', res.data.token)
        this.$store.dispatch('signIn', { // Dispatch the signIn action  
          user: res.data.user,
          token: res.data.token
        });
      }
    })
    .catch(error => {  
      if (this.$route.path !== '/login') {  
        this.$router.push('/login');
        localStorage.removeItem('token')
      }  
    });  
  }  
};
</script>

<style scoped>
  .nav-link:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 0.1875rem;
  }
</style>
