<template>
  <div class="col-md-4">
    <div class="team-player">
      <img
        src="img/avatar.jpg"
        alt="Thumbnail Image"
        class="rounded-circle img-fluid img-raised"
      />
      <h4 class="title">{{ name }}</h4>
      <p class="category text-primary">{{ role }}</p>
      <p class="description">
        You can write here details about one of your team members. You
        can give more details about what they do. Feel free to add
        some <a href="#">links</a> for people to be able to follow
        them outside the site.
      </p>
      <a href="#pablo" class="btn btn-primary btn-icon btn-round"
        ><i class="fab fa-twitter"></i
      ></a>
      <a href="#pablo" class="btn btn-primary btn-icon btn-round"
        ><i class="fab fa-instagram"></i
      ></a>
      <a href="#pablo" class="btn btn-primary btn-icon btn-round"
        ><i class="fab fa-facebook-square"></i
      ></a>
    </div>
  </div>
</template>
<script>

export default {
  name: "MemberCardComponent",
  props: {  
    name: {  
      type: String,  
      required: true // This prop is required  
    },  
    role: {  
      type: String,  
      required: true // Default value if not provided  
    }  
  },
  created() {

  }
};
</script>
<style></style>
