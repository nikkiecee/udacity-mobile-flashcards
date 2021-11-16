// import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import Constants from "expo-constants";
import { blue, gray } from "./utils/colors";
import DeckListNavigator from "./navigator/DeckListNavigator";
import NewDeckNavigator from "./navigator/NewDeckNavigator";

const Tab = createBottomTabNavigator();

function UdaciStatusBar ({ backgroundColor, props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{ headerShown: false }}
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
    <View style={{flex: 1}}>
      <UdaciStatusBar backgroundColor={blue} barstyle="light-content" />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </View>
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
