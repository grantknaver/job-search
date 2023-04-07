<template>
          <li class="mb-7">
        <router-link
          class="mx-auto block rounded border border-solid border-brand-gray-2 bg-white hover:shadow-gray"
          to="/jobs/results/1"
        >
          <div class="mx-8 border-b border-solid border-brand-gray-2 pt-5 pb-2">
            <h2 class="mb-2 text-2xl">
              Technical Program, Preception, Augmented Reality
            </h2>
            <div class="flex flex-row align-middle">
              <div class="mr-5">
                <span>Bobo</span>
              </div>
              <div>
                <span>San Francisco, CA USA</span>
              </div>
            </div>
          </div>
          <div class="px-8 py-4">
            <div>
              <h3 class="mt-1 mb-2"></h3>
              <div>
                <ul class="list-disc pl-8">
                  <li>Bachelor's degree or equivalent practical experience</li>
                  <li>5 years experience in program management.</li>
                </ul>
              </div>
            </div>
            <div class="mt-2 text-center">
              <router-link
                to="/jobs/results"
                class="text-brand-blue-1"
              >Expand</router-link>
            </div>
          </div>
        </router-link>
      </li>
</template>

<script>
export default {
    name: "JobListing"
}
</script>