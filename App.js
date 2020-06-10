import React, { useEffect, useState } from 'react';
import Routes from './src/Routes';
import { Provider } from 'react-redux';
import { store, persistor }  from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import * as Font from 'expo-font';

export default function App() {
  const [isFontReady, setFontReady] = useState(false);

  useEffect(() => {
    async function loadFont() {
      return await Font.loadAsync({
        'Cinzel-Black': require('./assets/fonts/Cinzel-Black.ttf'),
        'Cinzel-Bold': require('./assets/fonts/Cinzel-Bold.ttf'),
        'Cinzel-Regular': require('./assets/fonts/Cinzel-Regular.ttf'),
      });
    }
    loadFont().then(() => {
      setFontReady(true)
    });
  }, []);

  return (
    (
      isFontReady &&
      <Provider store={store}> 
        <PersistGate persistor={persistor}>
          <Routes/>
        </PersistGate>
      </Provider>
    )
  );
}
