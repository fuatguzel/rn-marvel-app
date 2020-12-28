import React, { Component } from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from './HomeStack';
import SearchStack from './SearchStack';

import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
export class TabNavigation extends Component {
    render() {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: () => {
                        if (route.name === "Home") {
                            return (
                                <AntDesign name="home" size={24} color="#ED1D24" />
                            )
                        } else if (route.name === "Search") {
                            return (
                                <EvilIcons name="search" size={24} color="#ED1D24" />
                            )
                        }
                    }
                })}
                tabBarOptions={{
                    activeTintColor: "white",
                    inactiveTintColor: "#ED1D24",
                    showLabel: false,
                    activeBackgroundColor: '#ED1D24',
                }}
            >
                <Tab.Screen name="Home" component={HomeStack} />
                {/* <Tab.Screen name="Search" component={SearchStack} /> */}
            </Tab.Navigator>
        )
    }
}

export default TabNavigation
