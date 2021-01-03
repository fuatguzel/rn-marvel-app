import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import CustomHeader from '../components/CustomHeader'
import { useRoute } from '@react-navigation/native';
import { dataCharacters } from '../api/Characters'

export default function HomeDetail({ navigation }) {
    let isNone = false;
    const route = useRoute();
    return (
        <View>
            <CustomHeader title='' isHome={false} navigation={navigation} />
            <ScrollView>
                <Image
                    style={{
                        marginTop: 10,
                        height: 250,
                        alignSelf: "stretch",
                    }}
                    source={{ uri: `${route.params.thumbnail.path}.${route.params.thumbnail.extension}` }}
                />
                <View style={{ flexWrap: 'wrap' }}>
                    <Text style={{ marginTop: 10 }}>Title : {route.params.name}</Text>
                    <Text style={{ marginTop: 10 }}>Description : {isNone ? 'none' : route.params.description}</Text>
                    <Text style={{ marginTop: 10 }}>Comics Count : {isNone ? 'none' : route.params.comics.available}</Text>
                    <Text style={{ marginTop: 10 }}>Stories Count : {isNone ? 'none' : route.params.stories.available}</Text>
                </View>
            </ScrollView>
        </View>
    )
}
