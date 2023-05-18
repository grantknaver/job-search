<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid w-96 border-brand-gray-1"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>
      <collapsible-accordion header="Degree">
      </collapsible-accordion>
      <job-filters-sidebar-job-types />
      <job-filters-sidbar-organizations />

    </section>
  </div>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";
import JobFiltersSidbarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidbarOrganizations.vue";
import JobFiltersSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue";
export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    CollapsibleAccordion,
    JobFiltersSidbarOrganizations,
    JobFiltersSidebarJobTypes
  },
};
</script>
