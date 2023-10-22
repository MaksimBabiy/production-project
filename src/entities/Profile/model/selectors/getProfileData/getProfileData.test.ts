import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { getProfileData } from "./getProfileData";
describe("getProfileData.test", () => {
  const data = {
    username: "admin",
    age: 22,
    country: Country.UKRAINE,
    lastname: "bbbb",
    first: "asd",
    city: "Odessa",
    currency: Currency.UAH,
  };
  test("should return state", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test("should return empty state", () => {
    const state: DeepPartial<StateSchema> = {
      profile: { data: {} },
    };
    expect(getProfileData(state as StateSchema)).toEqual({});
  });
});
