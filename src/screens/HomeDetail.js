import React from 'react'
import { View, Text } from 'react-native'
import CustomHeader from '../components/CustomHeader'

export default function HomeDetail({ navigation }) {
    return (
        <View>
            <CustomHeader title='Home Detail' isHome={false} navigation={navigation} />
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text>Home Details</Text>
            </View>
        </View>
    )
}
