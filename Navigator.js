import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store/store';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import MainScreen from './src/screens/MainScreen';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Messages from './src/screens/Messages';

const Stack = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Messages: {
      screen: Messages,
    },
  },
  {headerLayoutPreset: 'center'},
);

export const Tabs = createBottomTabNavigator(
  {
    TabA: {screen: Stack},
    TabB: {screen: Home},
    TabC: {screen: Profile},
  },
  {
    order: ['TabA', 'TabB', 'TabC'],
    animationEnabled: true,
  },
);

const AppContainer = createAppContainer(Tabs);

export default class Navigator extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
