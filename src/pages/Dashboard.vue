<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg6.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Welcome to join our Company.</h1>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Who we are?</h2>
            <h5 class="description">
              We are a software agency based in Japan, 
              providing a variety of software solutions for companies worldwide. 
              We operate remotely and have an in-office week once every three months. 
              We are expanding our agency's reach globally now.
              We invite you to join our business.
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('img/bg.jpg')"
              >
                <!-- First image on the left side -->
                <p class="blockquote blockquote-primary">
                  "Over the span of the satellite record, Arctic sea ice has
                  been declining significantly, while sea ice in the
                  Antarctichas increased very slightly"
                  <br />
                  <br />
                  <small>-NOAA</small>
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div
                class="image-container"
                style="background-image: url('img/bg3.jpg')"
              ></div>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right"
                style="background-image: url('img/bg1.jpg')"
              ></div>
              <h3>
                So what is WebGroup's role
              </h3>
              <p>
                Welcome to [Your Agency Name], a leading web development agency dedicated to transforming your digital presence. With a team of skilled developers, designers, and strategists, we specialize in creating innovative, user-friendly websites tailored to meet the unique needs of our clients. Our commitment to excellence and attention to detail ensure that every project we undertake not only meets industry standards but also exceeds client expectations.
              </p>
              <p>
                At WebGroup, we understand that a strong online presence is crucial for success in today’s digital landscape. Whether you are a startup looking to establish your brand or an established business aiming to enhance your online capabilities, we offer a comprehensive range of services, including custom web development, e-commerce solutions, content management systems, and responsive design.
              </p>
              <p>
                Our collaborative approach ensures that we work closely with you throughout the development process, from initial concept to final launch. We pride ourselves on delivering high-quality solutions that drive engagement, increase conversions, and foster growth.
                Join us at WebGroup and let us help you navigate the digital world with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-tabs px-4">
      <div class="container">

        <div class="row">
          <div class="col-md-12 ml-auto col-xl-6 mr-auto">
            <card class="tab-content-padding text-center">
              <h4>Web App Development</h4>
              <p>
                I think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that things
                could be at. So when you get something that has the name Kanye
                West on it, it’s supposed to be pushing the furthest
                possibilities. I will be the leader of a company that ends up
                being worth billions of dollars, because I got the answers. I
                understand culture. I am the nucleus.
              </p>
            </card>
          </div>
          <div class="col-md-12 ml-auto col-xl-6 mr-auto">
            <card class="tab-content-padding text-center">
              <h4>Java Software Development</h4>
              <p>
                WebGroup provides best-in-class Java development services using advanced Java frameworks and the latest innovations in Java technology. We provide reusable code and we specialize in robust and agile server-side and client-side custom application development with a flexible tech stack.
              </p>
            </card>
          </div>
          <div class="col-md-12 ml-auto col-xl-6 mr-auto">
            <card class="tab-content-padding text-center">
              <h4>Web Development</h4>
              <p>
                We engineer fast, secure, and reliable websites for a multitude of industries, including education, healthcare, finance, and so much more. Our developers specialize in e-Commerce store management systems, engaging mobile apps, intranet portals, cloud-based currency processing solutions, BI solutions, and more.
              </p>
            </card>
          </div>
          <div class="col-md-12 ml-auto col-xl-6 mr-auto">
            <card class="tab-content-padding text-center">
              <h4>Application Support and Modernization</h4>
              <p>
                We support and maintain your applications, several frameworks and extensions, libraries, data-processing platforms, IDEs, and databases. We provide application support and modernization services to ensure that your application is working at optimal conditions. We curb operational costs, minimize redundancy and complexity, and boost quality through seamless external integrations.
              </p>
            </card>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-team text-center">
      <div class="container">
        <h2 class="title">Team Members</h2>
        <div class="team">
          <div class="row">
            <MemberCardComponents   
              v-for="developer in developers"   
              :key="developer.id"
              :name="developer.name"
              :role="developer.role_name"
              :photo="developer.photo"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Want to work with us?</h2>
        <p class="description">Your project is very important to us.</p>
        <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <fg-input
              class="input-lg"
              placeholder="First Name..."
              v-model="form.firstName"
              addon-left-icon="now-ui-icons users_circle-08"
            >
            </fg-input>
            <fg-input
              class="input-lg"
              placeholder="Email Here..."
              v-model="form.email"
              addon-left-icon="now-ui-icons ui-1_email-85"
            >
            </fg-input>
            <div class="textarea-container">
              <textarea
                class="form-control"
                name="name"
                rows="4"
                cols="80"
                v-model="form.message"
                placeholder="Type a message..."
              ></textarea>
            </div>
            <div class="send-button">
              <n-button type="primary" round block size="lg"
                >Send Message</n-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { Button, FormGroupInput, Card } from '@/components';
import MemberCardComponents from './components/MemberCardComponents.vue';
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Card,
    MemberCardComponents
  },
  data() {
    return {
      developers: '',
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    };
  },
  created() {
    axios.post('/api/developers')
    .then(res => {
      this.developers = res.data.developers
    })
  }
};
</script>

<style>
  .services {
    height: 50px;
  }
</style>
