import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
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
    Alert,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';


import firebase from 'firebase'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const bgImage = require('../../img/deadpool-2.png');

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.onSignUp = this.onSignIn.bind(this)
    }

    onSignIn() {
        const { email, password } = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
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
                            <ScrollView style={{ flex: 1, padding: 20 }}>
                                {/* SOME MESSAGE */}
                                <Text style={{ fontSize: 40, color: 'white', marginVertical: 80 }}>{'Welcome\nBack'}</Text>

                                {/* FORM */}
                                <TextInput
                                    style={{
                                        ...styles.inputStyle,
                                    }}
                                    placeholder={'Email'}
                                    placeholderTextColor={'grey'}
                                    onChangeText={(email) => this.setState({ email })}
                                />

                                <TextInput
                                    style={{
                                        ...styles.inputStyle,
                                        marginTop: 50,
                                    }}
                                    placeholder={'Password'}
                                    placeholderTextColor={'grey'}
                                    secureTextEntry
                                    onChangeText={(password) => this.setState({ password })}
                                />

                                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 30, color: '#41444E', marginVertical: 50 }}>Sign in</Text>
                                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                        <TouchableOpacity
                                            style={{
                                                height: 70,
                                                width: 70,
                                                borderRadius: 40,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: '#4DB7E0',
                                            }}>
                                            <MaterialIcons name={'arrow-forward'} size={30} color={'white'}
                                                onPress={() => this.onSignIn()}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                    <TouchableOpacity style={{ ...styles.textBtn }} onPress={() => this.props.navigation.navigate('Register')}>
                                        <Text style={{ ...styles.textBtnLabel }}>Sign up</Text>
                                    </TouchableOpacity>
                                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                        <TouchableOpacity style={{ ...styles.textBtn }}
                                            onPress={() => this.props.navigation.navigate('ForgotPassword')}
                                        >
                                            <Text style={{ ...styles.textBtnLabel }}>Forgot Password</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ScrollView>
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
        color: 'black',
        width: '100%',
        marginTop: 100,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 0.5,
        paddingBottom: 15,
    },
    textBtn: {
        borderBottomColor: '#4DB7E0',
        borderBottomWidth: 1,
        marginVertical: 50,
    },
    textBtnLabel: {
        fontSize: 20,
        color: '#4DB7E0',
    },
});

export default Login


// <View>
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
            //         onPress={() => this.onSignIn()}
            //         title='Sign Up'
            //     />
            // </View>
