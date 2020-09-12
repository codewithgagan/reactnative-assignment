import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  View,
  Platform,
  TextInput
} from "react-native";
import CalculatorButton from "./components/CalculatorButton";

var displayValue = 0;

export default function App() {

  
  const [displayValue1, setDisplayValue] = useState("0");

  // All buttons that need to be rendered
  const buttons = [
    ["AC", "⌫"],
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    [".", "0", "=", "+"],
  ];

  // Rendering or printing the buttons
  function renderButtons() {

    //This will cover the whole layout or all the buttons
    let layout = buttons.map((buttonRow, index) => {
    
      //This covers each row
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

  function noRepitionLogic(input, displayValue, [operator1, operator2, operator3]) {
    
    let str3 = displayValue.toString();
    let newString = str3.substr(0, str3.length - 1);
    let str2 = str3.slice(str3.length - 1, str3.length); // get the last digit

    if(displayValue == 0) {
      displayValue = input;
      return displayValue;
    }

    // Changing operator to the new operator if user pressed a different button by mistake
    // Example if user pressed / then * then current operator is *
    // This will be done only when last digit is not "." as 12./2 is nothing
    displayValue =
      str2 !== input && str2 !== "." // last digit is not the current operator and not "."
        ? str2 === operator1 || str2 === operator2 || str2 === operator3
          ? newString + input
          : displayValue + input
        : displayValue;

    return displayValue;
  }

  // Handling the output according to the button which user pressed
  function handleInput(input) {
  
    switch (input) {
      case "0":
        displayValue = displayValue == 0 ? displayValue : displayValue + input;
        break;

      case "-":
        displayValue = noRepitionLogic(input, displayValue, ["+", "/", "*"]);
        break;

      case "+":
        displayValue = noRepitionLogic(input, displayValue, ["/", "-", "*"]);
        break;

      case "*":
        displayValue = noRepitionLogic(input, displayValue, ["+", "-", "/"]);
        break;

      case "/":
        displayValue = noRepitionLogic(input, displayValue, ["+", "-", "*"]);
        break;

      case ".":
        let str = displayValue.toString();
        str = str.slice(str.length - 1, str.length);
        //If the last digit is not an operator or "." only then append the decimal
        displayValue =
          str !== "." &&
          str !== "/" &&
          str !== "*" &&
          str !== "-" &&
          str !== "+"
            ? displayValue + input
            : str !== "." ? displayValue + "0." : displayValue;
        break;

      case "=":
        displayValue = eval(displayValue);
        break;

      case "⌫":
        let str1 = displayValue.toString();
        displayValue =
          displayValue.length <= 1
            ? "0"
            : str1.substr(0, displayValue.length - 1);
        break;

      case "AC":
        displayValue = "0";
        break;

      // This will cover all the buttons like 1, 2, 3, 4, 5, 6, 7, 8, 9
      default:
        displayValue = displayValue == 0 ? input : displayValue + input;
        break;
    }
    displayValue = displayValue.toString();
    console.log(displayValue);
    setDisplayValue(displayValue);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText} >{displayValue1}</Text>
      </View>

      <View style={styles.inputContainer}>{renderButtons()}</View>
    </SafeAreaView>
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
