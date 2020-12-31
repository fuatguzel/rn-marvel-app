import React from 'react'
import { View, Text } from 'react-native'
import CustomHeader from '../components/CustomHeader'

export default function SettingsScreen({ navigation }) {
    return (
        <View>
            <CustomHeader title='Settings' isHome={false} navigation={navigation} />
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings Screen</Text>
            </View>
        </View>
    )
}
