import { defineStore } from "pinia";
import { ref } from 'vue';
export const ADD_SELECTED_DEGREES = "ADD_SELECTED_DEGREES";
export const ADD_SELECTED_ORGANIZATIONS = "ADD_SELECTED_ORGANIZATIONS";
export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES";
export const CLEAR_USER_JOB_FILTER = 'CLEAR_USER_JOB_FILTER';

export const useUserStore = defineStore("user", () => {
    const isLoggedIn = ref(false);
    const selectedDegrees = ref<string[]>([]);
    const selectedOrganizations = ref<string[]>([]);
    const selectedJobTypes = ref<string[]>([]);

    const LOGIN_USER = () => {
        isLoggedIn.value = true;
    };

    const ADD_SELECTED_ORGANIZATIONS = (organizations: string []) => {
        selectedOrganizations.value = organizations;
    };

    const ADD_SELECTED_JOB_TYPES = (jobTypes: string[]) => {
        selectedJobTypes.value = jobTypes;
    };

    const ADD_SELECTED_DEGREES = (degreeTypes: string[]) => {
        selectedDegrees.value = degreeTypes;
    };

    const CLEAR_USER_JOB_FILTER = () => {
        selectedOrganizations.value = [];
        selectedJobTypes.value = [];
        selectedDegrees.value = [];
    }

    return {
        isLoggedIn,
        selectedDegrees,
        selectedOrganizations,
        selectedJobTypes,
        LOGIN_USER,
        ADD_SELECTED_ORGANIZATIONS,
        ADD_SELECTED_JOB_TYPES,
        ADD_SELECTED_DEGREES,
        CLEAR_USER_JOB_FILTER
    }
});
