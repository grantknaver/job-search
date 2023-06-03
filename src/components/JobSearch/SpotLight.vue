<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import { type Spotlight } from "@/api/types";

const spotlights = ref<Spotlight[]>([]);
const getSpotlights = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const url = `${baseUrl}/spotlights`;
  const { data }: { data: Spotlight[] } = await axios.get(url);
  spotlights.value = data;
};
onMounted(getSpotlights);
</script>
