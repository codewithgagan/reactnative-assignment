import React from 'react';
import {Image, View, Button, Text, StyleSheet} from "react-native";

function Card(props) {
    
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{
                height: 300,
                width: 300,
                uri: "http://placeimg.com/640/480/food"
            }} />
            <Text style={styles.title}>Tanya Rempel</Text>
            <Text style={styles.content}>Lorem ipsum dolor sit amet, adipiscing</Text>
            <Button onPress={() => {props.props.navigation.navigate("Detail")}} title="Read More ..." />
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        marginTop: 6,
        fontWeight: "bold",
    },
    content: {
        fontSize: 17,
        padding: 10,
    },
    image: {
        padding: 10,
        borderRadius: 20,
    },
    card: {
        backgroundColor: "#fff",
        margin: 20,
        padding: 20,
        borderRadius: 20,
    }
})

export default Card;
