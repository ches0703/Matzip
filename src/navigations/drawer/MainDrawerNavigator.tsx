import React from 'react';
import MapHomeScreen from '../../screens/MapHomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FeedHomeScreen from '../../screens/FeedHomeScreen';
const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHome" component={MapHomeScreen} />
      <Drawer.Screen name="FeedHome" component={FeedHomeScreen} />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigator;
