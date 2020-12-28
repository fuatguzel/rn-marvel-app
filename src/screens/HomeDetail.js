import React from 'react'
import { View, Text } from 'react-native'

export default function HomeDetail({ navigation }) {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <CustomHeader title='Home' isHome={true} navigation={navigation} />
            <Text>Home Details</Text>
        </View>
    )
}
