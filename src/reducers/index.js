import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { getAllProductions } from './productionReducer';

export default combineReducers({
  productions: getAllProductions,
});