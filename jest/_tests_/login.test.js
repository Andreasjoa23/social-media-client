import { login } from "../../src/js/api/auth/login.js";
import { save } from "../../src/js/storage/save.js";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        accessToken: "fake-token",
        user: "test-user",
      }),
  }),
);

jest.mock("../../src/js/storage/save.js", () => ({
  save: jest.fn(),
}));

describe("login", () => {
  it("should store a token when provided with valid credentials", async () => {
    const email = "Alfred@noroff.no";
    const password = "Canterbury123";

    const profile = await login(email, password);

    expect(save).toHaveBeenCalledWith("token", "fake-token");
    expect(save).toHaveBeenCalledWith("profile", {
      user: "test-user",
    });
    expect(profile).toEqual({ user: "test-user" });
  });
});
