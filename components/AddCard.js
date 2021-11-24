import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { black } from "../utils/colors";

export default function AddCard({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your Question here"
        label="Question"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter your Answer here"
        label="Answer"
      />

      <TouchableOpacity onPress={() => navigation.navigate("Deck")}>
        <View style={styles.button}>
          <Text style={{ color: "white", fontSize: 18 }}>Add Card</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
  },
  textInput: {
    height: 50,
    width: 320,
    borderWidth: 2,
    borderRadius: 5,
    fontSize: 16,
    marginVertical: 20,
    padding: 10,
  },
  button: {
    width: 150,
    height: 45,
    backgroundColor: black,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,
  },
});
