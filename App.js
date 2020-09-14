import React from "react";
// npm Libraries
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import "react-native-gesture-handler";
//Screens
import Detail from "./Screens/Detail";
import Home from "./Screens/Home";
import Contact from "./Screens/Contact";
import Tab1 from "./Screens/Tab1";
import Tab2 from "./Screens/Tab2";
import Tab3 from "./Screens/Tab3";



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

export default function App() {
  // This is the part which will help us to navigate through different pages i.e. First from Home to Detail then Detail to Top Tabs
  function stackNavigation() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home Page",
          }}
        />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Top Tabs" children={manageTopTabs} />
        <Stack.Screen name="Bottom Tabs" children={manageBottomTabs} />
      </Stack.Navigator>
    );
  }

  // This function will return the Top Tabs navigation and is used inside stackNavigation function
  function manageTopTabs() {
    return (
      <MaterialTopTabs.Navigator>
        <MaterialTopTabs.Screen
          name="Tab 1"
          options={{
            title: "Developers",
          }}
          component={Tab1}
        />
        <MaterialTopTabs.Screen
          name="Tab 2"
          options={{
            title: "About Us",
          }}
          component={Tab2}
        />
        <MaterialTopTabs.Screen name="Tab 3" component={Tab3} />
      </MaterialTopTabs.Navigator>
    );
  }

  // This function will return the Bottom Tabs navigation
  function manageBottomTabs() {
    return (
      <MaterialBottomTabs.Navigator>
        <MaterialBottomTabs.Screen name="Tab 1" component={Tab1} />
        <MaterialBottomTabs.Screen name="Tab 2" component={Tab2} />
        <MaterialBottomTabs.Screen name="Tab 3" component={Tab3} />
      </MaterialBottomTabs.Navigator>
    );
  }

  // This is the main container and will contain Drawer navigation
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={stackNavigation} />
        <Drawer.Screen name="Contact Us" component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
