import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { TestAsyncThunk } from "shared/lib/TestAsyncThunk/TestAsyncThunk";
import { fetchProfileData } from "./fetchProfileData";

describe("fetchProfileData.test", () => {
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
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });
  test("should get error", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();
    expect(result.meta.requestStatus).toBe("rejected");
  });
});
