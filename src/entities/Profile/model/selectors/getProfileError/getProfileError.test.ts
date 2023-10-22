import { StateSchema } from "app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";

describe("getProfileError.test", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: "err",
      },
    };

    expect(getProfileError(state as StateSchema)).toEqual("err");
  });
  test("should return empty", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: undefined,
      },
    };
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
