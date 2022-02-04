<template>
  <div>
    <div class="flex justify-center">
      <button
        @click="increment"
        class="bg-blue-500 hover:bg-blue-700 w-56 mr-2 text-white font-bold py-2 px-4 rounded"
      >
        +
      </button>
      <button
        v-if="isValue"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="decrement"
      >
        -
      </button>
    </div>
    <div class="flex justify-center">
      <p class="mt-4">
        {{ counter }}
      </p>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  setup() {
    const counter = ref(0);

    const isValue = computed(() => counter.value > 0);

    const increment = () => {
      counter.value++;
    };

    const decrement = () => {
      counter.value--;
    };

    return {
      counter,
      increment,
      decrement,
      isValue,
    };
  },
};
</script>

<style>
.display__button {
  display: inline-block;
}
.button {
  /* display: inline-block; */
  width: 95px;
  margin: 0 6px;
}
</style>
