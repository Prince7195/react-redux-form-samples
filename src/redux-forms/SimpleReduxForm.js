import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const data = {
    firstName: 'Prince111',
    lastName: 'Deepak111'
}

const updateFormData = (values) => {
    return {
        type: 'ADD_FORM_DATA2',
        payload: values
    }
}

const loadDefault = (values) => {
    return {
        type: 'LOAD_DEFAULT2',
        payload: values
    }
}

const SimpleReduxFormFunc = (props) => {
    const { handleSubmit, loadDefault, reset, updateFormData } = props;
    return (
        <div>
            <form onSubmit={handleSubmit((values) => updateFormData(values))} >
                <div className='form-group'>
                    <label>First Name</label>
                    <Field className='form-control' name='firstName' component='input' type='text' />
                </div>
                <div className='form-group'>
                    <label>Last Name</label>
                    <Field className='form-control' name='lastName' component='input' type='text' />
                </div>
                <div>
                    <button className='btn btn-success' type='submit'>Submit</button>
                    <button className='btn btn-default' onClick={() => loadDefault(data)} type='button'>Load</button>
                    <button className='btn btn-danger' onClick={reset} type='button'>Reset</button>
                </div>
            </form>
        </div>
    );
};

const SimpleReduxForm = reduxForm({
    form: 'simplereduxform'
})(SimpleReduxFormFunc);

const mapDispatchToProps = (dispatch) => {
    return {
        loadDefault: (data) => dispatch(loadDefault(data)),
        updateFormData: (values) => dispatch(updateFormData(values))
    }
}

export default connect(null, mapDispatchToProps)(SimpleReduxForm);