import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";

export default function DeckList({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is DeckList Page</Text>
      <Button title="To Deck" onPress={() => navigation.navigate("Deck")} />
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
