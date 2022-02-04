<template>
  <div>
    <div>
      <ul class="list-disc">
        <li v-for="(item, i) in dataListSetUp" :key="i">
          <div v-if="item.title !== ''">
            {{ item.title }} -
            <span @click="deleteList(i)" class="text-delete">Delete</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex justify-center">
      <form
        @submit.enter.prevent="toListButton"
        action=""
        class="w-full max-w-lg"
      >
        <div class="flex flex-wrap -mx-3 mb-6 justify-center">
          <div class="w-88 h-20 px-3 mb-6 md:mb-0">
            <label
              class="flex uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Input
            </label>
            <input
              v-model="value"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Input Something"
            />
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              send
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
export default {
  setup() {
    const dataListSetUp = reactive([
      {
        title: "Mahardika",
      },
    ]);

    // const router = useRouter()
    // const route = useRoute()

    const value = ref("");
    const toListButton = () => {
      dataListSetUp.push({ title: value.value });
      value.value = "";
    };

    const deleteList = (i) => {
      if (dataListSetUp.length === 1) {
        alert("cant delete this list");
      } else {
        dataListSetUp.splice(i, 1);
        alert("delete sucessfully");
      }
    };

    return {
      dataListSetUp,
      value,
      toListButton,
      deleteList,
    };
  },
};
</script>

<style scoped>
div > ul {
  display: block;
}

div > ul > li > div > .text-delete {
  color: red;
  transition: 0.9s;
}

div > ul > li > div > .text-delete:hover {
  text-decoration: underline;
}

.container > form > input[type="text"] {
  margin: 0 2px 0 0;
}
</style>
