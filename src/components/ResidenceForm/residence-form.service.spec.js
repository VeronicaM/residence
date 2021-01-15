import { getDefaultState, isFormValid } from "./residence-form.service";

test("getDefaultState returns expected default state", () => {
  const result = getDefaultState();

  const expectedDefaultState = {
    zipCode: "",
    number: 0,
    latitude: 0,
    longitude: 0,
    noResidents: 0,
    touched: {
      zipCode: false,
      number: false,
      latitude: false,
      longitude: false,
      noResidents: false,
    },
  };

  expect(result).toStrictEqual(expectedDefaultState);
});

test("isFormValid returns true for valid inputs", () => {
  const state = {
    zipCode: "95378",
    number: 10,
    latitude: 50,
    longitude: 180,
    noResidents: 20,
    touched: {
      zipCode: true,
      number: true,
      latitude: true,
      longitude: true,
      noResidents: true,
    },
  };

  const result = isFormValid(state);

  expect(result).toBe(true);
});

test("isFormValid returns false for invalid inputs", () => {
  const state = {
    zipCode: "0000",
    number: 10,
    latitude: 50,
    longitude: -181,
    noResidents: 20,
    touched: {
      zipCode: true,
      number: true,
      latitude: true,
      longitude: true,
      noResidents: true,
    },
  };

  const result = isFormValid(state);

  expect(result).toBe(false);
});
