import React from 'react';
import { StackNavigator } from 'react-navigation';

const Router = StackNavigator({
    Home: { screen: App },
    Profile: { screen: Profile }
});