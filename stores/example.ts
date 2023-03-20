import { defineStore } from "pinia";

export const useExampleStore = defineStore("example", () => {
  let items = ref([]);
  const getItems = computed(() => items.value);

  return { getItems };
});
