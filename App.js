import React from 'react';
import Home from './src/screens/Home';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}> 
      <Home/>
    </Provider>
  );
}
