import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export default function Deck({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is Deck Page</Text>
      <Button title="To Quiz" onPress={() => navigation.navigate("Quiz")} />
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
