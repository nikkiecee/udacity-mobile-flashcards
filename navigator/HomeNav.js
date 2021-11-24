import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import DeckList from "../components/DeckList";
import AddDeck from "../components/AddDeck";
import { blue, gray } from "../utils/colors";

const Tab = createBottomTabNavigator();

const HomeNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptons={{
        activeTintColor: blue,
        inactiveTintColor: gray,
      }}
    >
      <Tab.Screen
        name="DeckList"
        component={DeckList}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="list-alt" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="NewDeck"
        component={AddDeck}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="add-box" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default HomeNav;
