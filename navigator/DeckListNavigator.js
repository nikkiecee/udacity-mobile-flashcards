import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DeckList from "../components/DeckList";
import Deck from "../components/Deck";
import NewCard from "../components/NewCard";
import Quiz from "../components/Quiz";
import Results from "../components/Results";
import { blue, white } from "../utils/colors";

const Stack = createStackNavigator();

const DeckListNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="DeckList"
      screenOptions={{
        headerStyle: { backgroundColor: blue },
        headerTintColor: white,
        headerTitleAlign: 'center'
      }}
    >
      <Stack.Screen name="All Decks" component={DeckList} />
      <Stack.Screen name="Deck" component={Deck} />
      <Stack.Screen name="New Card" component={NewCard} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
};

export default DeckListNavigator;

const styles = StyleSheet.create({});
