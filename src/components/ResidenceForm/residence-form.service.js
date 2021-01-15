import {
  zipCodeValidator,
  positiveIntegerValidator,
  latitudeValidator,
  longitudeValidator,
} from "../../services/validators.service.js";

export const fieldsConfig = [
  {
    name: "zipCode",
    type: "string",
    validator: zipCodeValidator,
  },
  {
    name: "number",
    type: "number",
    validator: positiveIntegerValidator,
  },
  {
    name: "latitude",
    type: "number",
    validator: latitudeValidator,
  },
  {
    name: "longitude",
    type: "number",
    validator: longitudeValidator,
  },
  {
    name: "noResidents",
    type: "number",
    validator: positiveIntegerValidator,
  },
];

const getFieldNamesWithDefaultValue = (
  { asBoolean } = { asBoolean: false }
) => {
  return fieldsConfig.reduce((acc, field) => {
    acc[field.name] = field.type === "string" ? "" : 0;

    if (asBoolean) {
      acc[field.name] = false;
    }

    return acc;
  }, {});
};

export const getDefaultState = () => {
  const defaultState = getFieldNamesWithDefaultValue();
  const touched = getFieldNamesWithDefaultValue({ asBoolean: true });
  return { ...defaultState, touched };
};

export const isFormValid = (values) => {
  const hasErrors = fieldsConfig
    .map(({ name, validator }) => {
      return values.touched[name] && validator(values[name]);
    })
    .filter((value) => value === true);

  return hasErrors.length === fieldsConfig.length;
};

export default {
  getDefaultState,
  fieldsConfig,
  isFormValid,
};
