import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import DeveloperCard from "../components/DeveloperCard";

// This is a Top Tab which is retrieved after clicking a button on Detail Screen
function Tab1() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Our Developers Team</Text>
      <DeveloperCard
        imageName="mark"
        name="Mark Zuckerberg"
        description="Senior Developer at OSS"
      />
      <DeveloperCard
        imageName="bill"
        name="Bill Gates"
        description="Senior Developer at OSS"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1eff8",
  },
  text: {
    fontSize: 40,
    textAlign: "center",
  },
});

export default Tab1;
