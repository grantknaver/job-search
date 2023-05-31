<template>
  <div class="py-5 border-b border-solid border-brand-gray-2">
    <div
      class="flex flex-wrap items-center justify-between cursor-pointer"
      role="button"
      @click="open()"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="carrotIcon"></font-awesome-icon>
    </div>
    <div class="w-full mt-5" v-if="isOpen">
      <slot>Whoopsie</slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
defineProps({
  header: {
      type: String, 
      required: true,
    }
});

const isOpen = ref(false);
const open = () => {
  isOpen.value = !isOpen.value; 
};
const carrotIcon = computed(() => isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"]);

</script>
