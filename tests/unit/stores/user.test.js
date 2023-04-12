import { createPinia, setActivePinia } from "pinia";
import { useUserStore } from "@/stores/user";

describe("", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("it keeps track of if user is logged in", () => {
    const store = useUserStore();
    expect(store.isLoggedIn).toBe(false);
  });

  describe("actions", () => {
    describe("loginUser", () => {
      it("logs the user in", () => {
        const store = useUserStore();
        store.loginUser();
        expect(store.isLoggedIn).toBe(true);
      });
    });
  });
});
