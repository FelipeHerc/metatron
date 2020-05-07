import React from 'react';
import Home from './src/screens/Home';
import { Provider } from 'react-redux';
import { store, persistor }  from './src/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}> 
      <PersistGate persistor={persistor}>
        <Home/>
      </PersistGate>
    </Provider>
  );
}
