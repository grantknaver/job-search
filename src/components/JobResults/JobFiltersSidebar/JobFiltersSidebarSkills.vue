<template>
  <div class="mt-2">
    <input
      v-model.lazy.trim="skillsSearchTerm"
      class="h-12 w-full rounded border border-solid border-brand-gray-1 p-3 text-base shadow-gray"
      placeholder="Computer programming, Finance degree"
      type="text"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useUserStore } from "@/stores/user";

const useStore = useUserStore();

const skillsSearchTerm = computed({
  get() {
    return useStore.skillsSearchTerm;
  },
  set(value: string) {
    return useStore.UPDATE_SKILLS_SEARCH_TERM(value);
  },
});
</script>
