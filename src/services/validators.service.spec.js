import {
  defaultStringValidator,
  positiveIntegerValidator,
  longitudeValidator,
  latitudeValidator,
  zipCodeValidator,
} from "./validators.service";

test("a non empty string value returns true", () => {
  const result = defaultStringValidator("testing non empty value");

  expect(result).toBe(true);
});

test("a non empty object value returns false", () => {
  const result = defaultStringValidator({ a: "b" });
  expect(result).toBe(false);
});

test("a positive integer number returns true ", () => {
  const result = positiveIntegerValidator(10);
  expect(result).toBe(true);
});

test("a negative integer number returns false", () => {
  const result = positiveIntegerValidator(-1);
  expect(result).toBe(false);
});

test("a non integer number returns false", () => {
  const result = positiveIntegerValidator(10.8);
  expect(result).toBe(false);
});

test("a decimal value below 180 and above -180 is a valid longitude", () => {
  const lowerLimit = longitudeValidator(-180);
  const upperLimit = longitudeValidator("180");
  const midInteger = longitudeValidator("90");
  const midDecimal = longitudeValidator(50.5);

  expect(lowerLimit).toBe(true);
  expect(upperLimit).toBe(true);
  expect(midInteger).toBe(true);
  expect(midDecimal).toBe(true);
});

test("a decimal value above 180 or below -180 is a not a valid longitude", () => {
  const belowlowerLimit = longitudeValidator(-181);
  const aboveUpperLimit = longitudeValidator(181);

  expect(belowlowerLimit).toBe(false);
  expect(aboveUpperLimit).toBe(false);
});

test("a decimal value below 90 and above -90 is a valid latitude", () => {
  const lowerLimit = latitudeValidator(-90);
  const upperLimit = latitudeValidator("90");
  const midInteger = latitudeValidator("45");
  const midDecimal = latitudeValidator(45.5);

  expect(lowerLimit).toBe(true);
  expect(upperLimit).toBe(true);
  expect(midInteger).toBe(true);
  expect(midDecimal).toBe(true);
});

test("a decimal value above 90 and below -90 is not a valid latitude", () => {
  const belowlowerLimit = latitudeValidator(-91);
  const aboveUpperLimit = latitudeValidator(91);

  expect(belowlowerLimit).toBe(false);
  expect(aboveUpperLimit).toBe(false);
});

test("95015 is a valid zipcode", () => {
  const result = zipCodeValidator("95377");
  expect(result).toBe(true);
});

test("7521785-952-520 is not a valid zipcode", () => {
  const result = zipCodeValidator("7521785-952-520");
  expect(result).toBe(false);
});
