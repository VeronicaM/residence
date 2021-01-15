import React, { memo } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { defaultStringValidator } from "../../../services/validators.service";

function Input({
  type,
  inputValue,
  touched,
  fieldName,
  label,
  onFieldChanged,
  onBlur,
  validator = defaultStringValidator,
}) {

  const hasError = touched && !validator(inputValue);

  const fieldClasses = classnames({
    "c-field": true,
    "c-error": hasError,
  });

  const handleFieldChanged = (e) => {
    onFieldChanged({ name: fieldName, value: e.target.value });
  };

  const handleBlur = () => {
    onBlur(fieldName);
  };

  return (
    <div className={fieldClasses}>
      <label htmlFor={fieldName} className="c-label">
        <strong> {label}:</strong>
        <input
          data-testid="custom-input"
          type={type}
          name={fieldName}
          className="c-input"
          onBlur={handleBlur}
          onChange={handleFieldChanged}
          value={inputValue}
        />
      </label>
      {hasError && (
        <span data-testid="input-error" className="c-error">
          Please fill in valid {type} for {label}
        </span>
      )}
    </div>
  );
}

Input.propTypes = {
  fieldName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number"]).isRequired,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  touched: PropTypes.bool.isRequired,
  onFieldChanged: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  validator: PropTypes.func.isRequired,
};

export default memo(Input);
