import React from 'react';
import {Provider} from 'react-redux';

import {persistor, store} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import Navigation from './src/navigation';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}

export default App;
