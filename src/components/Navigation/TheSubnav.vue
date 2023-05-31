<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span><span class="text-brand-green-1">{{ FILTERED_JOBS.length }}</span> jobs matched</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useJobsStore } from '@/stores/jobs';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const onJobResultsPage = computed(() => useRoute.name === "JobResults");
const jobsStore = useJobsStore();
const FILTERED_JOBS = computed(() =>  jobsStore.FILTERED_JOBS);

</script>
