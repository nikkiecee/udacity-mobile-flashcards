import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { black, white, gray, blue } from "./../utils/colors";


export default function Deck({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>REACT</Text>
      <Text style={styles.text}> 4 cards</Text>
      <TouchableOpacity onPress={() => navigation.navigate("AddCard")} >
        <View style={[styles.button,{backgroundColor: white}]}>
          <Text style={{ color: "black", fontSize: 18 }}>Add Card</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Quiz")} >
        <View style={[styles.button,{backgroundColor: black}]}>
          <Text style={{ color: "white", fontSize: 18 }}>Start Quiz</Text>
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
  title: {
    fontSize: 35,
    fontWeight: "600",
    color: blue,
  },
  text: {
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 20,
    color: gray,
    marginBottom: 130,
  },
  button: {
    width: 200,
    height: 45,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    fontSize: 20,
  },
});
