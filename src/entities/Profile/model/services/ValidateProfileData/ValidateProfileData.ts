import { Profile, ValidateProfileError } from "../../types/profile";

export const ValidateProfileData = (profile: Profile) => {
  const { first, lastname, age, country, currency } = profile;
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }
  const errors: ValidateProfileError[] = [];

  if (!first || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }
  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }
  if (!currency) {
    errors.push(ValidateProfileError.INCORRECT_CURRENCY);
  }

  return errors;
};
