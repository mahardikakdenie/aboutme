<template>
  <div class="p-4">
    <first />
    <EducationVue class="mb-2" />
    <current-vue class="mt-12" />
  </div>
</template>
<script>
import CurrentVue from "../components/About/Current.vue";
import EducationVue from "../components/About/Education.vue";
import first from "../components/About/First.vue";

export default {
  components: {
    first,
    EducationVue,
    CurrentVue,
  },
};
</script>
