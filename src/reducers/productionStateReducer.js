import * as types from '../actions/actionTypes';

const initialState = {
  production: null,
  quantityId: null,
  order: null,
  step: 0,
  hasImage: false,
  uploadImageUrl: null,
  fileName: '',
};

export function productionStateReducer (state = initialState, action) {
  switch(action.type) {
    case types.SET_PRODUCTION_STATE:
      return Object.assign({}, state, {
        ...action.payload
      });
    default:
      return state;
  }
}
