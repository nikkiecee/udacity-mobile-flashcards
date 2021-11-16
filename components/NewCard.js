import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export default function NewCard({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is NewCard Page</Text>
      <Button
        title="To DeckList"
        onPress={() => navigation.navigate("DeckList")}
      />
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
