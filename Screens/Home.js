
import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, Text, Platform, StatusBar, FlatList, View, ActivityIndicator} from "react-native";

import Card from "../components/Card";
import {getArticles} from '../fetchNews';
//import {Container, Content, List} from 'native-base';


// This is the home screen which user will see on first loading the app and the data will be presented in the form of a card
// Props are used here for React Navigation only

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      data: null
    }
  }

  componentDidMount(){
    getArticles().then(data => {
      this.setState({
        isLoading: false,
        data: data
      });
    }, error => {
      alert("Error Something went wrong");
    }
    )
  }
  render(){
    //alert(this.state.data);
    let view = this.state.isLoading ? (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
        <Text style={{marginTop: 10}} children="Please Wait.." />
      </View>
    ) : (
      /*<List
      dataArray={this.state.data}
      renderRow={(item) => {
          return (
           /* <Card /*onPress={this.handleItemDataOnPress} data={item} /> 
          )
      }} /> */
      <FlatList data={this.state.data} 
      renderItem={({item}) => <Card data = {item}/>} />
    )
    console.log(view.props);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.centerAlign}>
                <Text style={styles.heading}>Welcome To our App</Text>
               {view}
            </ScrollView>
        </SafeAreaView>
    );
    }

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
