import React, { useState } from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'
import CustomHeader from '../components/CustomHeader'

export default function SettingsScreen({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View>
            <CustomHeader title='' isHome={false} navigation={navigation} />
            <View style={styles.container}>
                <Text>Notifications (on/off)</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#ED1D24" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});