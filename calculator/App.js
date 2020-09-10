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
  render(){
    return(
      <View style = {Style.rootContainer}>
        <View style = {Style.displayContainer}></View>
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
                    <InputButton value={input} key={r + "-" + i} 
                    onPress = {this._onInputButtonPress.bind(this, input)}/>
                );
            }

            views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
        }

        return views;
    }

    _onInputButtonPress(input){
      alert(input);
    }
}

export default App;