import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeNav from "./HomeNav";
import Deck from "../components/Deck";
import AddCard from "../components/AddCard";
import Quiz from "../components/Quiz";
import Results from "../components/Results";
import { blue, white } from "../utils/colors";

const Stack = createStackNavigator();

const DeckListNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: blue },
        headerTintColor: white,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Deck" component={Deck} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
};

export default DeckListNavigator;

const styles = StyleSheet.create({});
