import {
  zipCodeValidator,
  positiveIntegerValidator,
  latitudeValidator,
  longitudeValidator,
} from "../../core/services/validators.service.js";

export const fieldsConfig = [
  {
    name: "zipCode",
    type: "text",
    label: "ZIP Code",
    validator: zipCodeValidator,
  },
  {
    name: "number",
    type: "number",
    label: "Residence Number",
    validator: positiveIntegerValidator,
  },
  {
    name: "latitude",
    type: "number",
    label: "Latitude",
    validator: latitudeValidator,
  },
  {
    name: "longitude",
    type: "number",
    label: "Longitude",
    validator: longitudeValidator,
  },
  {
    name: "noResidents",
    type: "number",
    label: "Number of Residents",
    validator: positiveIntegerValidator,
  },
];

const getFieldNamesWithDefaultValue = (
  { asBoolean } = { asBoolean: false }
) => {
  return fieldsConfig.reduce((acc, field) => {
    acc[field.name] = "";

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

const moduleExports = {
  getDefaultState,
  fieldsConfig,
  isFormValid,
};

export default moduleExports;
