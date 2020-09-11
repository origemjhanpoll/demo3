import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import * as C from "./components";
import SlideProvider from "./context/slideContex";

export default function App() {
  return (
    <SlideProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <C.Count />
        <C.Slider />
      </View>
    </SlideProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: "#DCDCDC",
    padding: 16,
    width: 240,
    borderRadius: 20,
    bottom: 80,
  },
});
