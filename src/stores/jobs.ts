import { defineStore } from "pinia";
import { useUserStore } from "@/stores/user";
import getJobs from "@/api/getJobs";

export const FETCH_JOBS = "FETCH_JOBS";
export const UNIQUE_DEGREES = 'UNIQUE_DEGREES';
export const UNIQUE_ORGANIZATIONS = "UNIQUE_ORGANIZATIONS";
export const UNIQUE_JOB_TYPES = "UNIQUE_JOB_TYPES";
export const FILTERED_JOBS = "FILTERED_JOBS";
export const INCLUDE_JOB_BY_DEGREE = "INCLUDE_JOB_BY_DEGREE"
export const INCLUDE_JOB_BY_ORGANIZATION = "INCLUDE_JOB_BY_ORGANIZATION";
export const INCLUDE_JOB_BY_JOB_TYPE = "INCLUDE_JOB_BY_JOB_TYPE";

import type { Job } from '@/api/types';

interface JobsState {
  jobs: Job[]
}

export const useJobsStore = defineStore("jobs", {
  state: (): JobsState => ({
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
      const uniqueOrganizations = new Set<string>();
      state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
      return uniqueOrganizations;
    },
    [UNIQUE_JOB_TYPES](state) {
      const uniqueJobTypes = new Set<string>();
      state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
      return uniqueJobTypes;
    },
    [INCLUDE_JOB_BY_DEGREE]: () => (job: Job) => {
      const userStore = useUserStore();
      if (userStore.selectedDegrees.length === 0) return true;
      return userStore.selectedDegrees.includes(job.degree);
    },
    [INCLUDE_JOB_BY_ORGANIZATION]: () => (job: Job) => {
      const userStore = useUserStore();
      if (userStore.selectedOrganizations.length === 0) return true;
      return userStore.selectedOrganizations.includes(job.organization);
    },
    [INCLUDE_JOB_BY_JOB_TYPE]: () => (job: Job) => {
      const userStore = useUserStore();
      if (userStore.selectedJobTypes.length === 0) return true;
      return userStore.selectedJobTypes.includes(job.jobType);
    },
    [FILTERED_JOBS](state): Job[] {
      return state.jobs
        .filter((job) => this.INCLUDE_JOB_BY_ORGANIZATION(job))
        .filter((job) => this.INCLUDE_JOB_BY_JOB_TYPE(job))
        .filter((job) => this.INCLUDE_JOB_BY_DEGREE(job))
    },
  },
});
