import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';

import LoginCustomer from './components/Customer/LoginCustomer';
import LoginManager from './components/Manager/LoginManager';
import CustomerQueue from './components/Customer/CustomerQueue';
import ManagerQueue from './components/Manager/ManagerQueue';
import ManagerChangeOrder from './components/Manager/ManagerChangeOrder';
import ManagerCode from './components/Manager/ManagerCode';

import {
  createStackNavigator,
} from 'react-navigation'


const RootStack = createStackNavigator({
  LoginCustomer: LoginCustomer,
  LoginManager: LoginManager,

  CustomerQueue: CustomerQueue,
  ManagerQueue: ManagerQueue,
  ManagerChangeOrder: ManagerChangeOrder,
  ManagerCode: ManagerCode,
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 });

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
    }
  }
  
  render() {
      return (
        <RootStack />
      );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
