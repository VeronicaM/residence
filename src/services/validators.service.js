import isValidZipcode from "is-valid-zipcode";

function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
export const defaultStringValidator = (value) =>
  typeof value == "string" && Boolean(value);

export const positiveIntegerValidator = (value) =>
  Number.isInteger(+value) && +value > 0;

export const latitudeValidator = (value) =>
  isNumeric(+value) && +value >= -90 && +value <= 90;

export const longitudeValidator = (value) =>
  isNumeric(+value) && +value >= -180 && +value <= 180;

export const zipCodeValidator = (value) =>
  typeof value === "string" && isValidZipcode(value);

export default {
  defaultStringValidator,
  positiveIntegerValidator,
  latitudeValidator,
  longitudeValidator,
  zipCodeValidator,
};
