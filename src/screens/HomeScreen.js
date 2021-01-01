import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import { Card } from "react-native-elements";

import CustomHeader from '../components/CustomHeader'
import { db } from "../../App";
import { fetchComics } from '../api/fetchData'
import _ from "lodash";

//import HomeDetail from './HomeDetail'


export class HomeScreen extends Component {
    state = {
        comics: [],
        loading: false
    };


    handleComics = async () => {
        let comics = [];
        try {
            this.setState({ loading: true }, async () => {
                comics = await fetchComics();
                this.setState({ comics: comics, loading: false })
            });
        } catch (error) {
            console.log(error);
        }
    }



    componentDidMount() {
        this.handleComics()
    };

    // renderCharacters = (item) => {
    //     return (
    //         <TouchableOpacity
    //             key={item.id}
    //             onPress={() => {
    //                 navigation.navigate("HomeDetails", item);
    //             }}
    //         >
    //             <Card>
    //                 <View style={{ flexDirection: "row" }}>
    //                     <Card.Title >{item.name}</Card.Title>
    //                 </View>
    //                 <Card.Divider style={{ backgroundColor: "#e63737", height: 1.5 }} />
    //                 <Card.Image
    //                     style={{ width: 250 }}
    //                     source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} />
    //             </Card>
    //         </TouchableOpacity>
    //     );
    // };

    renderCards = (item) => {
        return (
            <TouchableOpacity
                key={item.id}
                onPress={() => {
                    this.props.navigation.navigate("HomeDetails", item);
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

    render() {
        return (
            <View>
                <CustomHeader title='' isHome={true} navigation={this.this.props.navigation} />
                <View
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ marginTop: 15, color: 'black', fontSize: '25', fontWeight: 'bold' }}>COMICS</Text>
                    <ScrollView style={{ marginTop: 15, marginBottom: 25 }} horizontal>
                        {this.state.loading && (
                            <ActivityIndicator size="small" color={'red'} />
                        )}
                        {this.state.comics &&
                            this.state.comics.map((comic) => this.renderCards(comic))}
                    </ScrollView>
                    {/* <Text style={{ color: 'black', fontSize: '25', fontWeight: 'bold' }}>CHARACTERS</Text>
                <ScrollView style={{ marginTop: 15, marginBottom: 25 }} horizontal>
                    {this.state.loading && (
                        <ActivityIndicator size="small" color={'red'} />
                    )}
                    {characters.data.results &&
                        characters.data.results.map((chracter) => this.renderCharacters(chracter))}
                </ScrollView> */}
                </View>
            </View >
        )
    }
}
