import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const FORM_DATA = [];

const reducer = {
    form: formReducer.plugin({
        simpleform: (state, action) => {
            switch (action.type) {
                case "LOAD_DEFAULT":
                    return {
                        ...state,
                        values:  action.payload
                    }

                case "ADD_FORM_DATA":
                    return {
                        ...state,
                        FORM_DATA: FORM_DATA.push(action.payload)
                    }
            
                default:
                    return {
                        ...state,
                        FORM_DATA
                    };
            }
        },
        simplereduxform: (state, action) => {
            switch (action.type) {
                case "LOAD_DEFAULT2":
                    return {
                        ...state,
                        values: action.payload
                    }

                case "ADD_FORM_DATA2":
                    return {
                        ...state,
                        FORM_DATA: FORM_DATA.push(action.payload)
                    }

                default:
                    return {
                        ...state,
                        FORM_DATA
                    };
            }
        }
    })
}

export const reducers = combineReducers(reducer);