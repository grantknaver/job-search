import axios from "axios";

import getJobs from "@/api/getJobs";

vi.mock("axios");

describe("getjobs", () => {
    beforeEach(() => {
        axios.get.mockResolvedValue({
            data: [{
                id: 1,
                title: "Java Engineer"
            }]
        });
    });
  it("fetchs jobs that canidates can apply to", async () => {
    await getJobs();
    expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs");
  });

  it("extracts jobs from response", async () => {
    const data = await getJobs();

    expect(data).toEqual([{
        id: 1, 
        title: "Java Engineer"
    }])
  });
});