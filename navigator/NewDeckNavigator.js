import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import NewDeck from "../components/NewDeck";
import { blue, white } from "../utils/colors";

const Stack = createStackNavigator();

const NewDeckNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: blue },
        headerTintColor: white,
      }}
    >
      <Stack.Screen name="NewDeck" component={NewDeck} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default NewDeckNavigator;
