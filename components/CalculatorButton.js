import React from "react";
import { StyleSheet, Text, Button, TouchableOpacity } from "react-native";

function CalculatorButton({ val, handleOnPress }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleOnPress(val)}
    >
      <Text style={styles.text}>{val}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  text: {
    color: "white",
    fontSize: 35,
  },
});

export default CalculatorButton;
