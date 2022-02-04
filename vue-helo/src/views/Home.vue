<template>
  <div class="home">
    <WelcomeVue />
    <feature-vue />
  </div>
</template>

<script>
import FeatureVue from "../components/Project.vue";
import WelcomeVue from "../components/Welcome.vue";

export default {
  name: "Home",
  components: {
    WelcomeVue,
    FeatureVue,
  },
};
</script>
