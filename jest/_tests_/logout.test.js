import { logout } from "../../src/js/api/auth/logout.js";
import { remove } from "../../src/js/storage/index.js";

jest.mock("../../src/js/storage/index.js", () => ({
  remove: jest.fn(),
}));

describe("logout", () => {
  it("should clear the token and profile from localStorage", () => {
    logout();

    expect(remove).toHaveBeenCalledWith("token");
    expect(remove).toHaveBeenCalledWith("profile");
  });
});
