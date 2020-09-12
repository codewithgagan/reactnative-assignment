import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, Text, Platform, StatusBar} from "react-native";
import Card from "../components/Card";

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
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
      backgroundColor: "#1bc1e4",
      alignItems: 'center',
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

