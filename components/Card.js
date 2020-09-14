import React from "react";
import { Image, View, Button, Text, StyleSheet } from "react-native";


// This is the card like structure used on the Home page where an image, a title, a small desciption is written
// Props are used here for React Navigation only


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.data = props.data
    }
    // Need to change button to direct to this.data.url
    render(){
        //alert('Card', this.data.title)
        return (
            <View style={styles.card}>
                <Image style={styles.image} source={{
                    height: 300,
                    width: 300,
                    uri: this.data.urlToImage != null ? this.data.urlToImage: "http://placeimg.com/640/480/food"
                }} /> 
                <Text style={styles.title} numberOfLines = {2}>{this.data.title}</Text>
            <Text style={styles.content} numberOfLines = {3}>{this.data.description}</Text>
                <Button onPress={() => /*{props.props.navigation.navigate("Detail")} */ 
                        this.data.url} title="Read More ..." />
            </View>
        )
    }

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
  },
});

export default Card;
