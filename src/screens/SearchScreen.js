import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CustomHeader from '../components/CustomHeader'

export default function Search() {
    return (
        <View>
            <CustomHeader title='Home' isHome={true} />
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Search</Text>
            </View>
        </View>
    )
}
