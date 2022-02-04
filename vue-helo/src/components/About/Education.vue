<template>
  <section>
    <div class="flex justify-center my-auto">
      <h1 class="font-mono text-customize">Education</h1>
    </div>
    <div class="flex justify-evenly">
      <div v-for="(item, i) in dataArr" class="" :key="i">
        <a
          href="#"
          class="flex flex-col items-center border-box bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://flowbite.com/docs/images/blog/image-4.jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {{ item.name }}
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  setup() {
    const dataArr = reactive([
      {
        name: "Sekolah Dasar Negri Pasarean",
      },
      {
        name: "Sekolah Menengah Pertama Negri 1 Sumedang",
      },
      {
        name: "Sekolah Menengah Atas Negri 1 Sumedang",
      },
    ]);

    return {
      dataArr,
    };
  },
};
</script>

<style></style>
