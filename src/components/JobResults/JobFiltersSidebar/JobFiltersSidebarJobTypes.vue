<template>
  <collapsible-accordion :header="header">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="value in uniqueValues"
            :key="value"
            class="w-1/2 h-8"
          >
            <input
              :id="value"
              v-model="selectedValues"
              :value="value"
              type="checkbox"
              class="mr-3"
              @change="selectValue"
            />
            <label :for="value">{{ value }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script setup>
def
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

import { useJobsStore } from "@/stores/jobs";
import { useUserStore } from "@/stores/user";

import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";

const props = defineProps({
  header: {
    type: String,
    required: true
  },
  uniqueValues: {
    type: Set,
    required: true,
  }, 
  action: {
    type: Function,
    required: true,
  }
})

// const selectedJobTypes = ref([]);
const selectedValues = ref([]);

// const jobsStore = useJobsStore();
// const UNIQUE_JOB_TYPES = computed(() => jobsStore.UNIQUE_JOB_TYPES);

const userStore = useUserStore();
const router = useRouter();

const selectValue = () => {
  props.action(selectedValues.value);
  router.push({name: "JobResults"});
};
</script>
