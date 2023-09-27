import { LoginSchema } from "../types/LoginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe("loginSlice.test", () => {
  test("test set username", () => {
    const state: DeepPartial<LoginSchema> = { username: "123" };
    expect(
      loginReducer(state as LoginSchema, loginActions.setUserName("123345"))
    ).toStrictEqual({ username: "123345" });
  });
});
