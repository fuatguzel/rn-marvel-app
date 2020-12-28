import React, { Component } from 'react'
import { Text, View } from 'react-native'

import HomeScreen from '../screens/HomeScreen';
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();
export class HomeStack extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name='HomeDetails' component={HomeDetails} options={{ headerShown: false }}></Stack.Screen>
            </Stack.Navigator>
        )
    }
}

export default HomeStack
