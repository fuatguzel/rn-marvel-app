import React, { Component } from "react";
//import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from "./TabNavigation";

import ProfileScreen from '../screens/ProfileScreen'
import SettingsScreen from '../screens/SettingsScreen'
import BookmarksScreen from '../screens/BookmarksScreen'
import ComicsScreen from '../screens/ComicsScreen'
import CharactersScreen from '../screens/ComicsScreen'
import { color } from "react-native-reanimated";

const Drawer = createDrawerNavigator();

export default function DraweNavigation() {
    return (
        <Drawer.Navigator initialRouteName="Home"
            drawerStyle={{
                backgroundColor: 'white'
            }}>
            <Drawer.Screen name="Home" component={TabNavigation} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Bookmarks" component={BookmarksScreen} />
            <Drawer.Screen name="Characters" component={CharactersScreen} />
            <Drawer.Screen name="Comics" component={ComicsScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator >
    );
}