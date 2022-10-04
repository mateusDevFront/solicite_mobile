import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Dashboard from '../screens/Dashboard/Dashboard';
import Home from '../screens/Home/Home'

const Stack = createNativeStackNavigator();

function AppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
        </Stack.Navigator>
    )
}
export default AppRoutes;