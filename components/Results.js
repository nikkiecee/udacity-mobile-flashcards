import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { blue, gray, black } from "../utils/colors";

export default function Results({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Your Score:</Text>
      <Text style={styles.score}>70%</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Deck");
        }}
      >
        <View style={styles.button}>
          <Text style={{ color: "white", fontSize: 18 }}>Back to Deck</Text>
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
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "300",
    color: gray,
  },
  score: {
    fontSize: 120,
    color: blue,
    marginBottom: 200,
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
