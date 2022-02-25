<template>
  <section id="welcome">
    <div class="py-20">
      <div class="flex items-center flex-col container mx-auto">
        <img
          class="mb-3 w-1/4 rounded-full shadow-lg"
          :src="require('@/assets/author.jpg')"
          alt="Bonnie image"
        />
        <h2 class="text-customize font-bold font-mono mb-2 text-red-800">
          {{ nameTransisition }}
        </h2>
        <h3 class="text-4xl mb-8 text-gray-900">{{ job }}</h3>

        <button
          @click="gotoAboutPage('/about')"
          class="py-2.5 w-1/4 rounded-xl px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          <div class="font-mono text-lg">About</div>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  setup() {
    const name = ref("Mahardika Kessuma Denie");
    const job = ref("Fullstack Web Developer");
    const nameTransisition = computed(() => {
      return name.value;
    });

    const router = useRouter();

    const gotoAboutPage = (link) => {
      router.push(link);
    };

    return {
      name,
      nameTransisition,
      job,
      gotoAboutPage,
      router,
    };
  },
};
</script>

<style></style>
