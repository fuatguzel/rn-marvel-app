import React from 'react'
import { View, Text } from 'react-native'

export default function HomeDetail({ navigation }) {
    return (
        <View>
            <CustomHeader title='Home Detail' isHome={true} navigation={navigation} />
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text>Home Details</Text>
            </View>
        </View>
    )
}
