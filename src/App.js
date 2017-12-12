import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SimpleForm, SimpleReduxForm } from './redux-forms';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className='row'>
          <div  className='col-xs-3'>
            <SimpleForm />
          </div>
          <div className='col-xs-3'>
          </div>
          <div className='col-xs-3'>
            <SimpleReduxForm />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-3'>
            {
              JSON.stringify(this.props.FORM_DATA)
            }
          </div>
          <div className='col-xs-3'>
          </div>
          <div className='col-xs-3'>
            {
              JSON.stringify(this.props.REDUX_FORM_DATA)
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const FORM_DATA = state.form.simpleform.FORM_DATA;
  const REDUX_FORM_DATA = state.form.simplereduxform.FORM_DATA;
  return {
    FORM_DATA,
    REDUX_FORM_DATA
  }
}

export default connect(mapStateToProps)(App);
