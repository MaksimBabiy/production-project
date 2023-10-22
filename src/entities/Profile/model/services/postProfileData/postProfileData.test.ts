import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { TestAsyncThunk } from "shared/lib/TestAsyncThunk/TestAsyncThunk";
import { postProfileData } from "./postProfileData";
import { ValidateProfileError } from "../../types/profile";

describe("postProfileData.test", () => {
  const data = {
    first: "Sasha",
    lastname: "SOSISKIN",
    age: 17,
    currency: Currency.UAH,
    country: Country.UKRAINE,
    city: "Bomonti",
    username: "sosiskin",
    avatar: "https:///sdasd//dasd",
  };
  test("should post data", async () => {
    const thunk = new TestAsyncThunk(postProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data: data }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });
  test("should err", async () => {
    const thunk = new TestAsyncThunk(postProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });
  test("should err", async () => {
    const thunk = new TestAsyncThunk(postProfileData, {
      profile: {
        form: { ...data, first: "" },
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
