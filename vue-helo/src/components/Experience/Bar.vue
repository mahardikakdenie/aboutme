<template>
  <section id="first">
    <div class="py-20">
      <div class="flex justify-center container mx-auto">
        <div class="flex flex-row justify-center">
          <div class="flex flex-column items-center ml-12">
            <div class="inline-block">
              <h1 class="text-customize font-mono">Skill</h1>
              <h2 class="text-2xl font-mono">
                Javascript & PHP Fullstack Developer
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-evenly">
        <div class="py-20">
          <div class="grid grid-cols-3 gap-2">
            <div v-for="(item, i) in dataArr" class="" :key="i">
              <div
                href="#"
                class="flex flex-col items-center h-40 border-box bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  :src="item.img"
                  alt=""
                />
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                  >
                    {{ item.name }}
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {{ item.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        name: "VUE JS",
        img: "https://miro.medium.com/max/1400/1*OrjCKmou1jT4It5so5gvOA.jpeg",
        text: "1 year of Experience",
      },
      {
        name: "LARAVEL",
        img: "https://miro.medium.com/max/1400/1*m0s2io11J82PR7miqan92w.png",
        text: "1 year of Experience",
      },
      {
        name: "Tailwind",
        img: "https://miro.medium.com/max/1400/1*_6ooq0R60ba3UT5c-QVemA.png",
        text: "1 year of Experience",
      },
      {
        name: "PHP",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/711px-PHP-logo.svg.png",
        text: "1 year of Experience",
      },
      {
        name: "JAVASCRIPT",
        img: "https://mpng.subpng.com/20190627/ttx/kisspng-javascript-computer-icons-scalable-vector-graphics-list-of-javascript-enhancements-fandom-developers-5d145895b06253.7824611015616144857225.jpg",
        text: "1 year of Experience",
      },
      {
        name: "SASS",
        img: "https://symbols-electrical.getvecta.com/stencil_95/18_sass.5a8c1431d6.svg",
        text: "1 year of Experience",
      },
    ]);

    return {
      dataArr,
    };
  },
};
</script>

<style lang="css"></style>
