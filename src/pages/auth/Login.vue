<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div
      class="page-header-image"
      style="background-image: url('img/login.jpg')"
    ></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
            <div slot="header" class="logo-container">
              <img v-lazy="'img/now-logo.png'" alt="" />
            </div>

            <fg-input
              class="no-border input-lg"
              :value="signinInfo.email"
              @change="inputEmailHandle"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="Email..."
            >
            </fg-input>

            <fg-input
              type="password"
              :value="signinInfo.password"
              @change="inputPasswordHandle"
              class="no-border input-lg"
              addon-left-icon="now-ui-icons text_caps-small"
              placeholder="Password..."
            >
            </fg-input>

            <template slot="raw-content">
              <div class="card-footer text-center">
                <n-button
                  href="#pablo"
                  @click="SignInHandle"
                  class="btn-primary btn-round btn-lg btn-block"
                  >Sign In
                </n-button>
              </div>
              <div class="pull-left">
                <h6>
                  <router-link to="/signup" class="link footer-link">Create Account</router-link>
                </h6>
              </div>
              <div class="pull-right">
                <h6>
                  <a href="" class="link footer-link">Need Help?</a>
                </h6>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from '@/components';
import MainFooter from '@/layout/MainFooter';
import axios from 'axios';
export default {
  name: 'login-page',
  bodyClass: 'login-page',
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data () {
    return {
      signinInfo: {
        email: '',
        password: ''
      },
    }
  },
  methods: {
    SignInHandle() {
      axios.post("/api/signin",
        this.signinInfo
      )
      .then(res => {
        console.log(res);
        if(res.data.ok == true) {
          this.$router.push("/dashboard");
        }
      })
      .catch(error => {  
        console.error("There was an error during sign-in:", error);  
      }); 
    },
    inputEmailHandle(e) {  
      this.signinInfo.email = e.target.value;  
    },
    inputPasswordHandle(e) {  
      this.signinInfo.password = e.target.value;  
    },
  }
};
</script>
<style></style>
