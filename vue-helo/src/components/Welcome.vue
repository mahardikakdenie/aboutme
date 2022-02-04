<template>
  <section id="welcome">
    <div class="py-20">
      <div class="flex items-center flex-col container mx-auto px-6">
        <img
          class="mb-3 w-24 h-35 rounded-xl shadow-lg"
          :src="require('@/assets/author.jpg')"
          alt="Bonnie image"
        />
        <h2 class="text-customize font-bold font-mono mb-2 text-red-800">
          {{ nameTransisition }}
        </h2>
        <h3 class="text-4xl mb-8 text-gray-900">{{ job }}</h3>

        <button
          class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider"
        >
          About
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
export default {
  setup() {
    const name = ref("Mahardika Kessuma Denie");
    const job = ref("Fullstack Web Developer");
    const nameTransisition = computed(() => {
      return name.value;
    });

    return {
      name,
      nameTransisition,
      job,
    };
  },
};
</script>

<style></style>
