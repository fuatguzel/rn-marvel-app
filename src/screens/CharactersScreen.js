import React from 'react'
import { View, Text } from 'react-native'
import CustomHeader from '../components/CustomHeader'


export default function CharactersScreen({ navigation }) {
    return (
        <View>
            <CustomHeader title='' isHome={false} navigation={navigation} />
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ marginTop: 25, fontSize: 25, fontWeight: 'bold', color: '#ED1D24' }}>Characters List</Text>
            </View>
        </View>
    )
}
