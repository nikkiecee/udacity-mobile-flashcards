import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export default function Quiz({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is Quiz Page</Text>
      <Button
        title="To Results"
        onPress={() => navigation.navigate("Results")}
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
