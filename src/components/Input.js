import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
import { SearchBar, Card } from "react-native-elements";

const Input = props => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#e71a24',
                borderRadius: 20,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 15,
                marginHorizontal: 20,
                marginTop: 25
            }}
        >
            <SearchBar
                containerStyle={styles.searchBarContainer}
                inputStyle={styles.searchInput}
                inputContainerStyle={styles.searchInputContainer}
                placeholder="Search.."
                //onChangeText={(text) => this.setState({ searchText: text })}
                //value={this.state.searchText}
                round
            />
            {/* <Image source={require('../img/icons/search.png')}
                style={{ width: 18, height: 18 }}
            />
            <TextInput
                style={{
                    marginLeft: 10,
                    height: 40,
                    flex: 1,
                    color: '#fff',
                }}
                autoCorrect={false}
                placeholder="Search"
                placeholderTextColor="#fff"
                returnKeyType="search"
                selectTextOnFocus
                {...props}
            /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    searchView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    },
    searchBarContainer: {
        color: "white",
        flex: 0.8,
        paddingTop: 20,
        height: 50,
        backgroundColor: '#e71a24',
        borderTopColor: '#e71a24',
        borderBottomColor: '#e71a24',
    },
    searchInputContainer: {
        backgroundColor: '#e71a24',
    },
    searchInput: {
        borderRadius: 10,
        backgroundColor: '#e71a24',
    },
    searchIcon: {
        flex: 0.2,
        paddingTop: 20,
        height: 50,
        width: 50,
    },
    searchResults: { marginTop: 70 },
    divider: { backgroundColor: '#e71a24', height: 1.5 },
});

export default Input;