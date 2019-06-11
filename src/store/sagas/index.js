import { all, takeLatest } from 'redux-saga/effects';

// import api from '~/services/api';
// import { navigate } from '~/services/navigation';

import { PodcastsTypes } from '~/store/ducks/podcasts';

import { load } from './podcasts';

export default function* rootSaga() {
  return yield all([takeLatest(PodcastsTypes.LOAD_REQUEST, load)]);
}
