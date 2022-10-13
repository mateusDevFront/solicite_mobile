import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import MainTab from './mainTab'
import CusttomTabs from '../components/CustomTabs';

export type StackPramsList = {
    Dashboard : undefined;
    MainTab: {
        name: string,
        number: number | string;
        order_id: string;
    }
    Home: {
        name: string,
        number: number | string;
        order_id: string;
    };
    FinishOrder: {
        number: number | string;
        order_id: string;
    }
}

const Tab = createBottomTabNavigator<StackPramsList>()

function AppRoutes(){
    return(
        <Tab.Navigator tabBar={(props) => <CusttomTabs {...props} />}>
          <Tab.Screen options={{ headerShown: false}} name="MainTab" component={MainTab} />
        </Tab.Navigator>
    )
}
export default AppRoutes;