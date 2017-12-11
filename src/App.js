import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SimpleForm } from './redux-forms';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className='row'>
          <div  className='col-xs-3'>
            <SimpleForm />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-3'>
            {
              JSON.stringify(this.props.FORM_DATA)
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const FORM_DATA = state.form.simpleform.FORM_DATA;
  return {
    FORM_DATA
  }
}

export default connect(mapStateToProps)(App);
