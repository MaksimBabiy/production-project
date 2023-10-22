import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { TestAsyncThunk } from "shared/lib/TestAsyncThunk/TestAsyncThunk";
import { ValidateProfileData } from "./ValidateProfileData";
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
  test("should return empty arr", () => {
    const result = ValidateProfileData({ ...data });
    expect(result).toEqual([]);
  });
  test("should return err", () => {
    const result = ValidateProfileData({ ...data, first: "", lastname: "" });
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
  test("should return err", () => {
    const result = ValidateProfileData({ ...data, age: 0 });
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });
  test("should return err", () => {
    const result = ValidateProfileData({
      ...data,
      country: undefined,
      currency: undefined,
      age: 0,
    });
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
      ValidateProfileError.INCORRECT_CURRENCY,
    ]);
  });
});
