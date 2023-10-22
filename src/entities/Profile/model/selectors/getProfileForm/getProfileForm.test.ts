import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { getProfileForm } from "./getProfileForm";

describe("getProfileForm.test", () => {
  const form = {
    age: 1,
    avatar: "asdasdas",
    first: "Maksim",
    lastname: "babiy",
    city: "Odessa",
    username: "smthdeath",
    currency: Currency.UAH,
    country: Country.USA,
  };
  test("should return form", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: form,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });
  test("should return empty form", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {},
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual({});
  });
});
