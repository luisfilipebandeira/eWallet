import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {Welcome} from '../pages/Welcome';
import {Dashboard} from '../pages/Dashboard';
import {AddMovimentation} from '../pages/AddMovimentation';
import {DeleteMovimentation} from '../pages/DeleteMovimentation';
import {SelectMovimentation} from '../pages/SelectMovimentation';
import {Stocks} from '../pages/Stocks';

import colors from '../styles/colors';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            },  
        }}>
        <stackRoutes.Screen name="Welcome" component={Welcome} />
        <stackRoutes.Screen name="Dashboard" component={Dashboard} />
        <stackRoutes.Screen name="AddMovimentation" component={AddMovimentation} />
        <stackRoutes.Screen name="DeleteMovimentation" component={DeleteMovimentation} />
        <stackRoutes.Screen name="SelectMovimentation" component={SelectMovimentation} />
        <stackRoutes.Screen name="Stocks" component={Stocks} />
    </stackRoutes.Navigator>
);

export default AppRoutes;