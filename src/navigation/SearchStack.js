import React, { Component } from 'react'
import { Text, View } from 'react-native'

import SearchScreen from '../screens/SearchScreen';
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();
export class SearchStack extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Search' component={SearchScreen} options={{ headerShown: false }}></Stack.Screen>
            </Stack.Navigator>
        )
    }
}

export default SearchStack
