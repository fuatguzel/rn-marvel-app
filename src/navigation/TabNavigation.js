import React, { Component } from "react";
import { Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from './HomeStack';
import SearchStack from './SearchStack';

// import { AntDesign } from '@expo/vector-icons';
// import { EvilIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
export class TabNavigation extends Component {
    render() {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let iconName;

                        if (route.name === "Home") {
                            iconName = focused
                                ? require('../img/icons/home.png')
                                : require('../img/icons/home-black.png')
                            // return (
                            //     <AntDesign name="home" size={24} color="#ED1D24" />
                            // )
                        } else if (route.name === "Search") {
                            iconName = focused
                                ? require('../img/icons/search.png')
                                : require('../img/icons/search-black.png')
                        }

                        return <View style={{ justifyContent: 'center' }}>
                            <Image source={iconName} style={{ width: 20, height: 20, justifyContent: 'center' }} resizeMode='contain' />
                        </View>
                    }
                })}
                tabBarOptions={{
                    activeTintColor: "black",
                    inactiveTintColor: "#ED1D24",
                    showLabel: false,
                    activeBackgroundColor: '#ED1D24',
                }}
            >
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Search" component={SearchStack} />
            </Tab.Navigator>
        )
    }
}

export default TabNavigation
