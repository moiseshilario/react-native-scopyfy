import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  setPodcastRequest: ['podcast', 'episodeId'],
  setPodcastSuccess: ['podcast'],
  setCurrent: ['id'],
  play: null,
  pause: null,
});

export const PlayerTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  podcast: null,
  current: null,
  playing: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PODCAST_SUCCESS]: (state, { podcast }) => state.merge({ podcast, current: podcast.tracks[0].id }),
  [Types.SET_CURRENT]: (state, { id }) => state.merge({ current: id }),
  [Types.PLAY]: state => state.merge({ playing: true }),
  [Types.PAUSE]: state => state.merge({ playing: false }),
});
