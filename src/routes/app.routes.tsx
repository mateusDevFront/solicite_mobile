import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Dashboard from '../screens/Dashboard/Dashboard';
import Home from '../screens/Home/Home'
import { FinishOrder } from '../screens/Finish/FinishOrder';

export type StackPramsList = {
    Dashboard : undefined;
    Home: {
        name: string,
        number: number | string;
        order_id: string;
    };
}

const Stack = createNativeStackNavigator<StackPramsList>();

function AppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
            <Stack.Screen name="FinishOrder" component={FinishOrder} options={{ headerShown: false}}/>
        </Stack.Navigator>
    )
}
export default AppRoutes;