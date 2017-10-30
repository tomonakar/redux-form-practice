import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import * as actions from '../../actions/';
import FieldInput from '../FormUtil/FieldInput';
import * as validate from '../FormUtil/Validate';
import normalizePhone from '../FormUtil/normalizePhone';

class CompanyRegistrationForm extends Component {
  onSubmit(values) {
    this.props.addCompany(values);
  }

  resetMessage() {
    this.props.reset();
    this.props.messageReset();
  }

  renderMessage() {
    if (this.props.message) {
      return (
        <div>
          {this.props.message}
        </div>
      );
    }
  }

  render() {
    const {
      handleSubmit,
      pristine,
      reset,
      submitting,
      error,
    } = this.props;

    return (
      <div className="campanyResitForm">
        <div className="campanyResitForm_positioning">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              name="company"
              type="text"
              component={FieldInput}
              label="企業名"
              validate={validate.required}
            />
            <Field
              name="address"
              type="text"
              component={FieldInput}
              label="住所"
              validate={validate.required}
            />
            <Field
              name="userName"
              type="text"
              component={FieldInput}
              label="担当者名"
              validate={validate.required}
            />
            <Field
              name="email"
              type="email"
              component={FieldInput}
              label="email"
              validate={[validate.required, validate.email]}
            />
            <Field
              name="phone"
              type="text"
              component={FieldInput}
              label="電話番号"
              normalize={normalizePhone}
              validate={validate.required}
            />
            {error && <strong>{error}</strong>}
            <div className="campanyResitForm-btn">
              <button
                className="campanyResitForm-btn-submit"
                type="submit"
                disabled={submitting}
              >登録
              </button>
              <button
                className="campanyResitForm-btn-cancel"
                type="button"
                disabled={submitting || pristine}
                onClick={this.resetMessage.bind(this)}
              >キャンセル
              </button>
            </div>
          </form>
          {this.renderMessage()}
        </div>
      </div>
    );
  }
}

CompanyRegistrationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  error: PropTypes.string,
  addCompany: PropTypes.func.isRequired,
  messageReset: PropTypes.func.isRequired,
  message: PropTypes.string,
};

CompanyRegistrationForm.defaultProps = {
  error: '',
  message: '',
};

function mapStateToProps(state) {
  console.log(state);
  return { message: state.administrator.message };
}

export default reduxForm({
  form: 'companyRegistrationForm',
})(connect(mapStateToProps, actions)(CompanyRegistrationForm));
