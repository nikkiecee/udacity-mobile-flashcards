import React from "react";
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { black } from "../utils/colors";

export default function AddDeck({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>What is the title of your new deck?</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Deck Title"
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("DeckList");
        }}
      >
        <SafeAreaView style={styles.button}>
          <Text style={{ color: "white", fontSize: 18 }}>Add Deck</Text>
        </SafeAreaView>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  label: {
    fontSize: 30,
    fontWeight: "300",
    textAlign: "center",
    marginTop: 30,
  },
  textInput: {
    height: 50,
    width: 320,
    borderWidth: 2,
    borderRadius: 5,
    fontSize: 16,
    marginTop: 30,
    marginBottom: 100,
    padding: 10,
  },
  button: {
    width: 200,
    height: 45,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    // marginBottom: 20,
    fontSize: 20,
    backgroundColor: black,
  },
});
