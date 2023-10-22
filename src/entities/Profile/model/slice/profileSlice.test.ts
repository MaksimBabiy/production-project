import { Currency } from "entities/Currency";
import { ProfileSchema, ValidateProfileError } from "../types/profile";
import { profileActions, profileReducer } from "./profileSlice";
import { Country } from "entities/Country";

describe("profileSlice.test", () => {
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
  test("test change readonly flag", () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(
      profileReducer(state as ProfileSchema, profileActions.changeReadOnly())
    ).toStrictEqual({ readonly: true });
  });
  test("test cancel edit", () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: { username: "" },
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({
      readonly: true,
      form: data,
      data,
      validateError: [],
    });
  });
  test("test update profile", () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: "12" },
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: "viktor" })
      )
    ).toEqual({
      form: { username: "viktor" },
    });
  });
});
