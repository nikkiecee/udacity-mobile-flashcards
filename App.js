import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./reducers/index";
import { blue } from "./utils/colors";
import MainNav from "./navigator/MainNav";

function UdaciStatusBar({ backgroundColor, props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <UdaciStatusBar backgroundColor={blue} barstyle="light-content" />
        <MainNav />
      </NavigationContainer>
    </Provider>
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
