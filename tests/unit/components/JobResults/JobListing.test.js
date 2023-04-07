import { render, screen } from "@testing-library/vue";
import JobListing from "@/components/JobResults/JobListing.vue";
import { RouterLinkStub } from "@vue/test-utils";

describe("JobListing", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Vue Developer",
    organization: "AirBnB",
    locations: ["New York"],
    minimumQualifications: ["Code"],
    ...jobProps,
  });
  const renderJobListing = (jobProps) => {
    render(JobListing, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
      props: {
        job: {
            ...jobProps
        },
      },
    });
  };

  it("renders Job title", () => {
    const jobProps = createJobProps({
        title: "Vue Programmer"
    });
    renderJobListing(jobProps);
    expect(screen.getByText("Vue Programmer")).toBeInTheDocument();
  });

  it("renders Job organization", () => {
    const jobProps = createJobProps({
        organization: "Samsung"
    });
    renderJobListing(jobProps);
    expect(screen.getByText("Samsung")).toBeInTheDocument();
  });
});
