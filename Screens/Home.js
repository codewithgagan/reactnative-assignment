import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  Platform,
  StatusBar,
} from "react-native";
import Card from "../components/Card";

// This is the home screen which user will see on first loading the app and the data will be presented in the form of a card
// Props are used here for React Navigation only
function Home(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.centerAlign}>
        <Text style={styles.heading}>Welcome To our App</Text>
        <Card props={props} />
        <Card props={props} />
        <Card props={props} />
        <Card props={props} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#1bc1e4",
    alignItems: "center",
  },
  centerAlign: {
    alignItems: "center",
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default Home;
