import { defineStore } from "pinia";
import { useUserStore } from "@/stores/user";
import getJobs from "@/api/getJobs";

export const FETCH_JOBS = "FETCH_JOBS";
export const UNIQUE_ORGANIZATIONS = "UNIQUE_ORGANIZATIONS";
export const FILTERED_JOBS_ORGANIZATIONS = "FILTERED_JOBS_ORGANIZATIONS";
export const useJobsStore = defineStore("jobs", {
  state: () => ({
    jobs: [],
  }),
  actions: {
    async [FETCH_JOBS]() {
      const data = await getJobs();
      this.jobs = data;
    },
  },
  getters: {
    [UNIQUE_ORGANIZATIONS](state) {
      const uniqueOrganizations = new Set();
      state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
      return uniqueOrganizations;
    },
    [FILTERED_JOBS_ORGANIZATIONS](state) {
      const userStore = useUserStore();
      return userStore.selectedOrganizations.length === 0
        ? state.jobs
        : state.jobs.filter((job) =>
            userStore.selectedOrganizations.includes(job.organization)
          );
    },
  },
});
