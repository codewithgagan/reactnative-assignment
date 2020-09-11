/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Text, View, TextInput } from 'react-native';
import Style from './components/styles.js';
import InputButton from './components/inputButton.js';

const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']
];

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      prevInput : 0,
      inputValue : 0,
      symbol : null
    }
  }
  render(){
    return(
      <View style = {Style.rootContainer}>
        <View style = {Style.displayContainer}>
            <Text style = {Style.displayText}> {this.state.inputValue}</Text>
        </View>
        <View style = {Style.inputContainer}>
                    {this._renderInputButtons()}
        </View>
      </View>
    )
  }

  _renderInputButtons() {
        let views = [];

        for (var r = 0; r < inputButtons.length; r ++) {
            let row = inputButtons[r];

            let inputRow = [];
            for (var i = 0; i < row.length; i ++) {
                let input = row[i];

                inputRow.push(
                    <InputButton value={input} 
                    highlight = {this.state.symbol===input}
                    key={r + "-" + i} 
                    onPress = {this._onInputButtonPress.bind(this, input)}/>
                );
            }

            views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
        }

        return views;
    }

    _onInputButtonPress(input){
      switch(typeof input) {
        case 'number' :
          return this.handleNumber(input)
        case 'string' :
          return this.handleString(input)
      }
    }

    handleNumber(num) {
      let inputValue = (this.state.inputValue * 10) + num;
      this.setState({
        inputValue: inputValue
      })
    }

    handleString(str){
      switch (str) {
        case '/':
        case '*':
        case '+':
        case '-':
            this.setState({
                selectedSymbol: str,
                previousInputValue: this.state.inputValue,
                inputValue: 0
            });
            break;
        case '=':
              let symbol = this.state.selectedSymbol,
                  inputValue = this.state.inputValue,
                  previousInputValue = this.state.previousInputValue;

              if (!symbol) {
                  return;
              }

              this.setState({
                  previousInputValue: 0,
                  inputValue: eval(previousInputValue + symbol + inputValue),
                  selectedSymbol: null
              });
              break;
        case '.' : alert('clear');
                  this.setState({
                    prevInput : 0,
                    inputValue: 0,
                    selectedSymbol : null
                  })
      }
    }
}

export default App;
