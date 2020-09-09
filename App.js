import React from "react";
import {
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  View,
  Platform,
  ScrollView,
} from "react-native";
import CalculatorButton from "./components/CalculatorButton";

export default function App() {
  const buttons = [
    ["AC", "⌫"],
    ["7", "8", "9", "÷"],
    ["4", "5", "6", "x"],
    ["1", "2", "3", "-"],
    [".", "0", "=", "+"],
  ];

  function renderButtons() {
    let layout = buttons.map((buttonRow, index) => {
      let rowItem = buttonRow.map((buttons, buttonIndex) => {
        return (
          <CalculatorButton
            handleOnPress={(value) => {
              handleInput(value);
            }}
            val={buttons}
            key={"btn-" + buttonIndex}
          />
        );
      });

      return (
        <View style={styles.inputRow} key={"row-" + index}>
          {rowItem}
        </View>
      );
    });

    return layout;
  }

  var displayValue = 0;

  function handleInput(input) {
    switch (input) {
      case "0":
        displayValue = displayValue === 0 ? displayValue : displayValue + input;
        break;

      case "-":
        displayValue = displayValue + input;
        break;

      case "+":
        displayValue = displayValue + input;
        break;

      case "x":
        displayValue = displayValue + "*";
        break;

      case "÷":
        displayValue = displayValue + "/";
        break;

      case ".":
        displayValue = displayValue + input;
        break;

      case "=":
        displayValue = eval(displayValue);
        break;

      case "⌫":
        let str = displayValue.toString();
        displayValue =
          displayValue.length <= 1 ? 0 : str.substr(0, displayValue.length - 1);
        break;

      case "AC":
        displayValue = 0;
        break;

      default:
        displayValue = displayValue === 0 ? input : displayValue + input;
        break;
    }
    console.log(displayValue);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{displayValue}</Text>
      </View>

      <View style={styles.inputContainer}>{renderButtons()}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  resultContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  inputContainer: {
    flex: 2,
    backgroundColor: "dodgerblue",
  },
  resultText: {
    color: "black",
    fontSize: 80,
    fontWeight: "bold",
    padding: 20,
    textAlign: "right",
  },
  inputRow: {
    flex: 1,
    flexDirection: "row",
  },
});
