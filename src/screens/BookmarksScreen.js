import React from 'react'
import { View, Text } from 'react-native'
import CustomHeader from '../components/CustomHeader'


export default function BookmarksScreen({ navigation }) {
    return (
        <View>
            <CustomHeader title='Bookmarks Screen' isHome={false} navigation={navigation} />
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Bookmarks Screen</Text>
            </View>
        </View>
    )
}
