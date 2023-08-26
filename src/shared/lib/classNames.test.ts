import { classNames } from "./classNames";

describe("classNames", () => {
  test("test", () => {
    expect(classNames("someClass zxc")).toBe("someClass zxc");
  });
});
