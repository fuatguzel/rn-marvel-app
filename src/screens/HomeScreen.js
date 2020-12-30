import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CustomHeader from '../components/CustomHeader'

//import HomeDetail from './HomeDetail'

export default function HomeScreen({ navigation }) {
    return (
        <View>
            <CustomHeader title='Home' isHome={true} navigation={navigation} />
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home Screen</Text>
                <TouchableOpacity>
                    <Text onPress={() => navigation.navigate('HomeDetail')}>Go to Details</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
