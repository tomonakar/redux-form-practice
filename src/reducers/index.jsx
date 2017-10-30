import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import administrator from './administrator';


const Reducers = combineReducers({
  form: formReducer,
  administrator,
});

export default Reducers;
