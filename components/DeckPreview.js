import React from "react";
import { SafeAreaView, StyleSheet, Text, Button } from "react-native";

export default function DeckPreview({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is DeckPreview Page</Text>
      <Button
        title="To Results"
        onPress={() => navigation.navigate("Results")}
      />
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
});
