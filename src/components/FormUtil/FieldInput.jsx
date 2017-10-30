import React from 'react';
import PropTypes from 'prop-types';

const FieldInput = (props) => {
  const {
    input, label, type, meta: { touched, error },
  } = props;
  const className = `form-group ${touched && error ? 'form-warning' : ''}`;

  return (
    <div className={className}>
      <div className="form-label">
        <label>{label}</label>
      </div>
      <div className="form-input">
        <input className="form-control" placeholder={label} type={type} {...input} />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    </div>
  );
};

FieldInput.propTypes = {
  input: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.any,
};

FieldInput.defaultProps = {
  meta: '',
};

export default FieldInput;
