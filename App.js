import React from 'react';
import {LogBox, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Router from './src/navigation/Router';
import {persistor, store} from './src/redux/store';
import FlashMessage from 'react-native-flash-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
        {/* <StatusBar hidden /> */}
    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>

        {/*<PersistGate loading={null} persistor={persistor}>*/}
        <Router />
        {/*</PersistGate>*/}
        </PersistGate>
        <FlashMessage position="top" icon="auto"/>
      </Provider>

    </SafeAreaProvider>
  );
};

export default App;

console.disableYellowBox = true;

LogBox.ignoreLogs([
  'Warning: VirtualizedList should',
  'Warning: Each child',
  'Warning: Each child in a',
  'Warning: Failed prop type',
]);
