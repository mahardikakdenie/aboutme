<template>
  <div class="">
    <div class="container mx-auto py-20">
      <div
        class="p-4 max-w-2xl mx-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="flex mb-5 justify-center text-pink-600 font-mono text-4xl">
          Contact Me
        </div>
        <div class="">
          <div
            v-for="(item, i) in dataIcon"
            :key="i"
            class="w-10 my-2 cursor-pointer"
          >
            <div class="flex items-center">
              <img :src="item.url" alt="" class="hover:scale-x-100" />
              <a
                :href="item.link"
                target="__blank"
                class="ml-2 underline mt-2 decoration-1 text-blue-600"
                >{{ item.link }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  components: {
    // FontAwesomeIcon,
  },
  setup() {
    // Api wA : https://api.whatsapp.com/send?phone=6289621174934&text=Selamat Datang!
    const dataIcon = reactive([
      {
        url: "https://seeklogo.com/images/I/instagram-new-2016-logo-D9D42A0AD4-seeklogo.com.png",
        link: "https://instagram.com/mahardikakdenie",
      },
      {
        url: "https://seeklogo.com/images/W/whatsapp-icon-logo-6E793ACECD-seeklogo.com.png",
        link: "https://wa.link/1514f2",
      },
      {
        url: "https://seeklogo.com/images/F/facebook-icon-logo-AEF3A8F447-seeklogo.com.png",
        link: "https://www.facebook.com/mahardika.kessuma/",
      },
      {
        link: "https://github.com/mahardikakdenie",
        url: "https://cdn3.iconfinder.com/data/icons/inficons/512/github.png",
      },
    ]);

    return {
      dataIcon,
    };
  },
};
</script>

<style></style>
