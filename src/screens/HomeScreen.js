import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import { Card } from "react-native-elements";

import CustomHeader from '../components/CustomHeader'
import { db } from "../../App";
import { fetchComics } from '../api/fetchData'
import _ from "lodash";
import { dataCharacters } from '../api/Characters'
import { dataComics } from '../api/Comics'



export default function HomeScreen({ navigation }) {
    state = {
        comics: [],
        data: [],
        characters: [],
        loading: false
    };



    // async function handleComics() {
    //     let comics = [];
    //     try {
    //         this.setState({ loading: true }, async () => {
    //             comics = await api.get('/v1/public/comics');
    //             this.setState({ comics: comics.data.data.results, loading: false })
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    // useEffect(() => {
    //     handleComics()
    // })


    renderCharacters = (item) => {
        return (
            <TouchableOpacity
                key={item.id}
                onPress={() => {
                    navigation.navigate("CharacterDetails", item);
                }}
            >
                <Card>
                    <View style={{ flexDirection: "row" }}>
                        <Card.Title >{item.name}</Card.Title>
                    </View>
                    <Card.Divider style={{ backgroundColor: "#e63737", height: 1.5 }} />
                    <Card.Image
                        style={{ width: 250 }}
                        source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} />
                </Card>
            </TouchableOpacity>
        );
    };

    renderCards = (item) => {
        return (
            <TouchableOpacity
                key={item.id}
                onPress={() => {
                    navigation.navigate("HomeDetail", item);
                }}
            >
                <Card>
                    <View style={{ flexDirection: "row" }}>
                        <Card.Title numberOfLines={1}>{item.title}</Card.Title>
                    </View>
                    <Card.Divider style={{ backgroundColor: "#e63737", height: 1.5 }} />
                    <Card.Image
                        style={{ width: 250 }}
                        source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} />
                </Card>
            </TouchableOpacity>
        );
    };


    return (
        <View>
            <CustomHeader title='' isHome={true} navigation={navigation} />

            <Text
                style={{ marginTop: 15, color: '#ED1D24', fontSize: 25, fontWeight: 'bold', marginLeft: 15 }}
            >COMICS</Text>
            <ScrollView style={{ marginTop: 15, marginBottom: 25 }} horizontal>
                {/* {this.state.loading.bind(this) && (
                    <ActivityIndicator size="small" color={'red'} />
                )} */}
                {dataComics &&
                    dataComics.map((comic) => this.renderCards(comic))}
            </ScrollView>
            <Text style={{ color: '#ED1D24', fontSize: 25, fontWeight: 'bold', marginLeft: 15 }}>CHARACTERS</Text>
            <ScrollView style={{ marginTop: 15, marginBottom: 25 }} horizontal>
                {this.state.loading && (
                    <ActivityIndicator size="small" color={'red'} />
                )}
                {dataCharacters &&
                    dataCharacters.map((chracter) => this.renderCharacters(chracter))}
            </ScrollView>

        </View >
    )
}

