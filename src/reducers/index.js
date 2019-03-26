import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { getAllProductions } from './productionReducer';
import { productionStepReducer } from './productionStepReducer';

export default combineReducers({
  productions: getAllProductions,
  productionStep: productionStepReducer
});

export const isAuthenticated = state => fromAuth.isAuthenticated(state.auth)
export const accessToken = state => fromAuth.accessToken(state.auth)
export const isAccessTokenExpired = state => fromAuth.isAccessTokenExpired(state.auth)
export const refreshToken = state => fromAuth.refreshToken(state.auth)
export const isRefreshTokenExpired = state => fromAuth.isRefreshTokenExpired(state.auth)

export function withAuth(headers={}) {
  return (state) => ({
    ...headers,
    'Authorization': `Bearer ${accessToken(state)}`
  })
}
