import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Button,
  Platform,
} from "react-native";

function Detail(props) {
  console.log(props);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            height: 300,
            width: 300,
            uri: "http://placeimg.com/640/480/food",
          }}
        />
        <Text style={styles.title}>Tanya Rempel</Text>
        <Text style={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, adipiscing
        </Text>
        <View style={styles.button}>
          <Button
            onPress={() => {
              props.navigation.navigate("Top Tabs");
            }}
            title="See More Tabs"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#1bc1e4",
  },
  title: {
    flex: 1,
    marginTop: 7,
    fontSize: 25,
    fontWeight: "bold",
  },
  content: {
    flex: 2,
    fontSize: 19,
    padding: 30,
    color: "#fff",
  },
  image: {
    marginTop: 30,
    borderRadius: 20,
  },
  button: {
    marginBottom: 20,
    padding: 20,
  },
});

export default Detail;
