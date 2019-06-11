import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
  ReduxSauce transforms into
  Types: { LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAILURE }

  Creators:
  loadRequest: () => ({ type: 'LOAD_REQUEST'})
  loadSuccess: (data) => ({ type: 'LOAD_SUCCESS', data})
  loadFailure: () => ({ type: 'LOAD_FAILURE'})
 */

/**
 * Action Types & Creators
 */
const { Types, Creators } = createActions({
  loadRequest: null,
  loadSuccess: ['data'],
  loadingFailure: null,
});

export const PodcastsTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: [],
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_SUCCESS]: (state, { data }) => state.merge({ data }),
});