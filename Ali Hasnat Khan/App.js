import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

export default class Calculator extends React.Component {
  state = {
    display: '',
    btnVals: [
      7, 8, 9, '/',
      4, 5, 6, '*',
      1, 2, 3, '-',
      'del', 0, '=', '+'
    ],
  };
  _handleClick(btnVal) {
    let result = this.state.display;

    if (result === '0') {
      result = '';
    }

    if (btnVal === '=') {
      result = String(eval(result));
    } else if (btnVal === 'del') {
      result = '';
    } else {
      result += btnVal;
    }

    this.setState({
      display: result,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.display}>{this.state.display}</Text>
        <View style={styles.list}>
          {
            this.state.btnVals.map((val, i) => {
              return <MyButton val={val} 
                handleClick={this._handleClick.bind(this)} 
                highlight={ (i+1)%4 == 0 } />
            })
          }
        </View>
      </View>
    );
  }
}

const MyButton = ({ val, handleClick, highlight }) => (
  <TouchableOpacity
    style={[styles.btn, { backgroundColor: highlight ? 'hotpink' : 'pink' }]}
    onPress={() => {
      handleClick(val);
    }}>
    <Text style={styles.btnText}>{val}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  display: {
    fontSize: 70,
    padding: 25,
  },
  btn: {
    width: Dimensions.get('window').width / 4, 
    padding: 20,
    borderWidth: 1,
    borderColor: 'white'
  },
  btnText: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    
  },
});