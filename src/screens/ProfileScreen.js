import React from 'react'
import { View, Text, Button } from 'react-native'
import CustomHeader from '../components/CustomHeader'
import firebase, { auth } from 'firebase/app'

//console.log(auth().currentUser.)

export default function ProfileScreen({ navigation }) {
    handleLogout = () => {
        firebase.auth().signOut();
    };
    return (
        <View>
            <View>
                <CustomHeader title='' isHome={false} navigation={navigation} />
            </View>
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 300 }}>
                <Text
                    style={{ alignItems: 'center', width: 200, height: 50, textAlign: 'center', borderRadius: 50, backgroundColor: 'red', color: 'white', fontSize: 25 }}
                    onPress={() => handleLogout()}
                >Sign Out</Text>
            </View>
        </View>
    )
}
