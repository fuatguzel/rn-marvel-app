import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CustomHeader from '../components/CustomHeader'
import Input from '../components/Input'

export default function Search({ navigation }) {
    return (
        <View>
            <CustomHeader title='Search' isHome={true} navigation={navigation} />
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Input
                    onChangeText={() => { }}
                    //value={search}
                    onFocus={() => { }
                    }
                //onSubmitEditing={() => { }}
                />
            </View>
        </View>
    )
}
