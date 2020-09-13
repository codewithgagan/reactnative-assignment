import React from "react";
import { StyleSheet, View, Text } from "react-native";

// This is the 2nd tab for Top Tabs (About Us Page)
function Tab2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Us</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 40,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "grey",
    padding: 25,
  },
});

export default Tab2;
