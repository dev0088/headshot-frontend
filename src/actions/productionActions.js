import { RSAA } from 'redux-api-middleware';
import apiConfig from '../constants/api';
import * as types from './actionTypes'

export const getAllProductions = () => {
  let token = getToken();
  return ({
    [RSAA]: {
      endpoint: `${apiConfig.url}/client/favorite/`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      types: [
        types.ALL_PRODUCTIONS.REQUEST, types.ALL_PRODUCTIONS.SUCCESS, types.ALL_PRODUCTIONS.FAILURE
      ]
    }
  });
};


export const setStep = (setp) => {
  return {
    type: types.SET_STEP,
    payload: {
      ...setp
    }
  }
};