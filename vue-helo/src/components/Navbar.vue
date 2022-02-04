<template>
  <nav
    class="bg-blue-100 border-pink-100 rounded-lg pt-2 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800"
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <div @click="navigate('/')" class="flex cursor-pointer">
        <svg
          class="mr-3 h-10"
          viewBox="0 0 52 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z"
            fill="#76A9FA"
          ></path>
          <path
            d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z"
            fill="#A4CAFE"
          ></path>
          <path
            d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z"
            fill="#1C64F2"
          ></path>
        </svg>
        <span
          class="self-center text-lg font-semibold whitespace-nowrap dark:text-white"
          >Mahardika Kessuma Denie</span
        >
      </div>
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          class="hidden w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul
          class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
        >
          <li v-for="(item, i) in dataNavbar" :key="i">
            <router-link
              :to="item.link"
              :class="`${
                route.name === item.text ? 'nav__active' : ''
              } block cursor-pointer font-mono text-black-700 text-lg cursor__hover font-bold py-2 pr-4 pl-3 rounded md:bg-transparent hover:text-grey-900 md:text-grey-1700 md:p-0 dark:text-white`"
              >{{ item.text }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";
export default {
  data: () => ({}),
  setup() {
    // start Data
    const dataNavbar = reactive([
      {
        text: "Home",
        link: "/",
      },
      {
        text: "About",
        link: "/about",
      },
      {
        text: "Experience",
        link: "/",
      },
      {
        text: "Contact",
        link: "/",
      },
    ]);
    // end data
    // routers
    const router = useRouter();
    const route = useRoute();
    const navigate = (link) => {
      router.push(link);
    };
    // end Router

    // MOUNTED
    onMounted(() => {
      // console.log(route.name, "name");
    });

    return {
      dataNavbar,
      router,
      route,
      navigate,
    };
  },
};
</script>

<style>
.cursor__hover {
  transition: 0.2s;
}
.cursor__hover:hover {
  border-bottom: 2px solid rgb(230, 17, 176) !important;
}

.nav__active {
  border-bottom: 2px solid rgb(230, 17, 176) !important;
}
</style>
