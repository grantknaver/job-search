import { defineStore } from "pinia";
export const ADD_SELECTED_DEGREES = "ADD_SELECTED_DEGREES";
export const ADD_SELECTED_ORGANIZATIONS = "ADD_SELECTED_ORGANIZATIONS";
export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES";

interface UserState {
    isLoggedIn: boolean;
    selectedDegrees: string[];
    selectedOrganizations: string[];
    selectedJobTypes: string[];
}

export const useUserStore = defineStore("user", {
    state: (): UserState => ({
        isLoggedIn : false,
        selectedDegrees: [],
        selectedOrganizations: [],
        selectedJobTypes: [],
    }),
    actions: {
        loginUser() {
           this.isLoggedIn = true; 
        },

        [ADD_SELECTED_ORGANIZATIONS](organizations: string []) {
            this.selectedOrganizations = organizations;
        },
        [ADD_SELECTED_JOB_TYPES](jobTypes: string[]) {
            this.selectedJobTypes = jobTypes;
        },
        [ADD_SELECTED_DEGREES](degreeTypes: string[]) {
            this.selectedDegrees = degreeTypes;
        }
    }
});
