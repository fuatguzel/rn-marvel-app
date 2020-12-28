import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    Alert,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    SafeAreaView,
    Platform,
    ScrollView,
    Dimensions,
    ImageBackground,
    TextInput,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Button
} from 'react-native';

import firebase from 'firebase'


import { MaterialIcons } from '@expo/vector-icons';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const bgImage = require('../../img/deadpool-2.png');

export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    static navigationOptions = {
        headerShown: false,
    };

    onSignUp() {
        const { email, password, name } = this.state;
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(
                () => { },
                (error) => {
                    Alert.alert(error.message);
                }
            );
    }


    render() {
        return (
            <ImageBackground source={bgImage} style={{ height: '100%', width: '100%' }}>
                <SafeAreaView style={{ flex: 1 }}>
                    <KeyboardAvoidingView style={{ flex: 1 }}>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View style={{ flex: 1, padding: 20 }}>
                                {/* SOME MESSAGE */}
                                <Text style={{ fontSize: 40, color: 'white', marginTop: 80, marginBottom: 40 }}>{'Create\nAccount'}</Text>

                                {/* FORM */}
                                <TextInput
                                    style={{
                                        ...styles.inputStyle,
                                        marginTop: 20,
                                    }}
                                    placeholder={'Name'}
                                    placeholderTextColor={'white'}
                                    onChangeText={(name) => this.setState({ name })}
                                />

                                <TextInput
                                    style={{
                                        ...styles.inputStyle,
                                    }}
                                    placeholder={'Email'}
                                    placeholderTextColor={'white'}
                                    onChangeText={(email) => this.setState({ email })}
                                />

                                <TextInput
                                    style={{
                                        ...styles.inputStyle,
                                    }}
                                    placeholder={'Password'}
                                    placeholderTextColor={'white'}
                                    onChangeText={(password) => this.setState({ password })}
                                    secureTextEntry
                                />

                                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                                    <Text style={{ fontSize: 30, color: 'white', marginVertical: 50 }}>Sign up</Text>
                                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                        <TouchableOpacity
                                            style={{
                                                height: 70,
                                                width: 70,
                                                borderRadius: 40,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: '#41444E',
                                            }}
                                            onPress={() => this.onSignUp()}
                                        >
                                            <MaterialIcons name={'arrow-forward'} size={30} color={'white'}
                                            >
                                            </MaterialIcons>
                                            {/* <Button
                                                title="->"
                                                onPress={() => this.onSignUp}
                                            >
                                            </Button> */}
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                    <TouchableOpacity style={{ ...styles.textBtn }} onPress={() => this.props.navigation.navigate("Login")}>
                                        <Text style={{ ...styles.textBtnLabel }}>Sign in</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </ImageBackground>

        )
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        fontSize: 20,
        color: 'white',
        width: '100%',
        marginTop: 50,
        borderBottomColor: 'white',
        borderBottomWidth: 0.5,
        paddingBottom: 15,
    },
    textBtn: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginVertical: 50,
    },
    textBtnLabel: {
        fontSize: 20,
        color: 'white',
    },
});

export default Register



            // <View>
            //     <TextInput
            //         placeholder="name"
            //         onChangeText={(name) => this.setState({ name })}
            //     />
            //     <TextInput
            //         placeholder="email"
            //         onChangeText={(email) => this.setState({ email })}
            //     />
            //     <TextInput
            //         placeholder="password"
            //         secureTextEntry={true}
            //         onChangeText={(password) => this.setState({ password })}
            //     />
            //     <Button
            //         onPress={() => this.onSignUp()}
            //         title='Sign Up'
            //     />
            // </View>
