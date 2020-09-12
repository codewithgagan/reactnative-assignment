import React from 'react';
import { StyleSheet, ScrollView, StatusBar, Text, Platform, SafeAreaView } from 'react-native';

//Screens
import Detail from "./Screens/Detail";
import Home from "./Screens/Home";

// npm Libraries
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {

    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
              name="Home" 
              component={Home} 
              options={{
                title: "Home Page",
              }} 
            />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    );

}


