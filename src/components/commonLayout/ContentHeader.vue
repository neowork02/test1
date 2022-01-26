<template>
  <!--Title  -->
  <div class="location-wrap">
    <h2>
      {{ title }}
    </h2>
  </div>
  <!--/ Title  -->
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },

  methods: {
    myFunction() {
      var x = document.getElementById("cont_tab");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },
  },
};
</script>
