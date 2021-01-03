import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { SearchBar, Card } from "react-native-elements";
import CustomHeader from '../components/CustomHeader'

export default function Search({ navigation }) {
    state = {
        data: [],
        searchText: "",
        loading: false,
    };
    return (
        <View>
            <CustomHeader title='' isHome={true} navigation={navigation} />
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                    style={{ marginTop: 25, borderRadius: 50, height: 35, width: 300, backgroundColor: 'red', color: 'white' }}
                    placeholder='    Search..'
                    placeholderTextColor='white'
                />
            </View>
        </View>
    )
}

