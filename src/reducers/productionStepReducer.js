import * as types from '../actions/actionTypes';

const initialState = {
  init: true,
  setp: 0
};

export const productionStepReducer = (state = initialState, action) => {
  // return Object.assign({}, state, {
  //   init: false,
  //   ...action.payload
  // });
  return state;
}