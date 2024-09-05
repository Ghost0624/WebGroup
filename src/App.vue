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
import './interceptors/axios'; // Adjust the path as necessary  

export default {};  
</script>
