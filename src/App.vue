<template>
  <div id="app">
    <router-view name="header" />
    <div class="wrapper">
      <router-view />
    </div>
    <router-view name="footer" />
  </div>
</template>
<script>
import axios from 'axios';
axios.defaults.baseURL = process.env.VUE_APP_API_URL
export default {};
</script>
