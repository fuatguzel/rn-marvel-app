import React, { Component } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Input, Button } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";

import firebase from 'firebase';

export class ForgotPassword extends Component {
    state = {
        email: "",
    };

    handleResetPassword = () => {
        const [email] = this.state;
        firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(
                () => {
                    Alert.alert("Password reset e-mail has been sent");
                },
                (error) => {
                    Alert.alert(error.message);
                }
            );
    };

    render() {
        return (
            <View style={styles.container}>
                <Input
                    placeholder="E-mail"
                    leftIcon={<MaterialIcons name="email" size={15} color="black" />}
                    value={email}
                    onChangeText={(text) => this.setState({ email: text })}
                />
                <Button title="Reset password" onPress={this.handleResetPassword} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
});

export default ForgotPassword;
