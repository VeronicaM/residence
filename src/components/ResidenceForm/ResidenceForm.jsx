import React, { useState } from "react";

import PropTypes from "prop-types";

import {
  getDefaultState,
  isFormValid,
  fieldsConfig,
} from "./residence-form.service";

import Input from "../../core/components/Input/Input";

import "./ResidenceForm.scss";

function ResidenceForm({ onAddResidence }) {
  const defaultState = getDefaultState();

  const [state, setState] = useState(defaultState);

  const submitForm = (e) => {
    e.preventDefault();
    const { latitude, longitude, noResidents } = state;

    onAddResidence({ latitude, longitude, noResidents });
    setState(defaultState);
  };

  const handleInput = (field) => {
    setState({ ...state, [field.name]: field.value });
  };

  const handleTouched = (fieldName) => {
    if (!state.touched[fieldName]) {
      setState({
        ...state,
        touched: {
          ...state.touched,
          [fieldName]: true,
        },
      });
    }
  };

  const renderFieldsInputs = fieldsConfig.map(
    ({ name, label, type, validator }) => (
      <Input
        key={name}
        label={label}
        fieldName={name}
        type={type}
        inputValue={state[name]}
        touched={state.touched[name]}
        onFieldChanged={handleInput}
        onBlur={handleTouched}
        validator={validator}
      />
    )
  );

  return (
    <form className="c-row residence-form__container">
      {renderFieldsInputs}
      <button
        type="submit"
        className="c-cta"
        onClick={submitForm}
        disabled={!isFormValid(state)}
      >
        Add
      </button>
    </form>
  );
}

ResidenceForm.propTypes = {
  onAddResidence: PropTypes.func.isRequired,
};

export default ResidenceForm;
