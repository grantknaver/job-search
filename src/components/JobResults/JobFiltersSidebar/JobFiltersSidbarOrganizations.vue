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
  
  <script>
  import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";
  import { mapState, mapActions } from "pinia";
  import { useJobsStore, UNIQUE_ORGANIZATIONS } from "@/stores/jobs";
  import { useUserStore, ADD_SELECTED_ORGANIZATIONS } from "@/stores/user";
  export default {
    name: "JobFiltersSidebarOrganizations",
    components: { CollapsibleAccordion },
    computed: {
      ...mapState(useJobsStore, [UNIQUE_ORGANIZATIONS]),
    },
    data() {
      return {
        selectedOrganizations: []
      }
    },
    methods: {
      ...mapActions(useUserStore, [ADD_SELECTED_ORGANIZATIONS]),
      selectOrganization() {
        this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations);
        this.$router.push({name: "JobResults"})
      }
    }
  };
  </script>
  