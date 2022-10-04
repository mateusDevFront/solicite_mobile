import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from '../screens/Login/Login';

const Stack = createNativeStackNavigator();

function AuthRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
        </Stack.Navigator>
    )
}
export default AuthRoutes;