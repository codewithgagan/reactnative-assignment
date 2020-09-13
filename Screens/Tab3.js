import React from "react";
import { StyleSheet, View, Text } from "react-native";

// Tab 3 in Top Tabs
function Tab3() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tab 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
  },
});

export default Tab3;
