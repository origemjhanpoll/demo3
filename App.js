import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as C from "./components";

export default function App(props) {
  const [value, setValue] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <C.Slider />
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
