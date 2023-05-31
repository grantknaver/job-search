<template>
    <collapsible-accordion header="Organizations">
      <div class="mt-5">
        <fieldset>
          <ul class="flex flex-row flex-wrap">
            
            <li v-for="organization in UNIQUE_ORGANIZATIONS" :key="organization" class="w-1/2 h-8">
              <input :id="organization" type="checkbox" class="mr-3" :value="organization" v-model="selectedOrganizations" @change="selectOrganization" />
              <label :for="organization">{{organization}}</label>
            </li>

          </ul>
        </fieldset>
      </div>
    </collapsible-accordion>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';

  import { useJobsStore } from "@/stores/jobs";
  import { useUserStore } from "@/stores/user";

  import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";

  const jobsStore = useJobsStore();
  const userStore = useUserStore();
  const UNIQUE_ORGANIZATIONS = computed(() => jobsStore.UNIQUE_ORGANIZATIONS);
  const router = useRouter();
  const selectedOrganizations = ref([]);
  const selectOrganization = () => {
    userStore.ADD_SELECTED_ORGANIZATIONS(selectedOrganizations.value);
    router.push({name: "JobResults"});
  };
  </script>
  