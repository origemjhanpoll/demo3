import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as C from "./components";

export default function App(props) {
  const [value, setValue] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={{ fontSize: 34, textAlign: "center" }}>{0}</Text>
      </View>
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
