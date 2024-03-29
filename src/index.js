import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';
import React from 'react';
import { Provider } from 'react-redux';

import store from '~/store';

import Routes from '~/routes';
import { setNavigator } from './services/navigation';

import Player from '~/components/Player';

const App = () => (
  <Provider store={store}>
    <Routes ref={setNavigator} />
    <Player />
  </Provider>
);

export default App;
