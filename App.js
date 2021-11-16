// import { StatusBar } from "expo-status-bar";
import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { blue, gray } from "./utils/colors";
import DeckListNavigator from './navigator/DeckListNavigator'
import NewDeckNavigator from "./navigator/NewDeckNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
  screenOptions={{headerShown:false}}
    tabBarOptons={{
      activeTintColor: blue,
      inactiveTintColor: gray,
    }}
  >
    <Tab.Screen
      name="DeckList"
      component={DeckListNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <FontAwesome name="list-alt" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="NewDeck"
      component={NewDeckNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="add-box" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
