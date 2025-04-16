import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
};

export default App;
