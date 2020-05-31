import React from 'react';
import Routes from './src/Routes';
import { Provider } from 'react-redux';
import { store, persistor }  from './src/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}> 
      <PersistGate persistor={persistor}>
        <Routes/>
      </PersistGate>
    </Provider>
  );
}
