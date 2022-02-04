<template>
  <div class="bg-blue-100">
    <NavbarVue />
    <view-vue />
  </div>
</template>

<script>
import NavbarVue from "../components/Navbar.vue";
import ViewVue from "../components/View.vue";
export default {
  components: {
    NavbarVue,
    ViewVue,
  },
};
</script>

<style></style>
