import React from 'react'
import { View, Text } from 'react-native'
import CustomHeader from '../components/CustomHeader'
import firebase, { auth } from 'firebase/app'

//console.log(auth().currentUser.)

export default function ProfileScreen({ navigation }) {
    return (
        <View>
            <CustomHeader title='Profile' isHome={false} navigation={navigation} />
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Profile Screen</Text>
            </View>
        </View>
    )
}
