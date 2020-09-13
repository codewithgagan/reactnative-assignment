import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function DeveloperCard({ imageName, name, description }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require(`../assets/${imageName}.jpg`)}
      />
      <View style={styles.column}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "1%",
  },
  image: {
    width: 125,
    height: 125,
    borderRadius: 64,
    margin: 30,
  },
  column: {
    flex: 1,
    flexDirection: "column",
  },
  name: {
    fontSize: 23,
    fontWeight: "bold",
  },
  description: {
    paddingTop: 10,
    color: "grey",
  },
});

export default DeveloperCard;
