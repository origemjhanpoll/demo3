import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSlide } from "../context/slideContex";

export default function App() {
  const { slide } = useSlide();
  return (
    <View
      style={[
        styles.card,
        {
          borderColor: slide >= 50 ? "#FF5733" : "#DCDCDC",
          borderStyle: slide >= 50 ? "dashed" : "solid",
        },
      ]}
    >
      <Text
        style={{
          fontSize: 34,
          textAlign: "center",
          color: slide >= 50 ? "#FF5733" : "#000",
        }}
      >
        {slide}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    padding: 16,
    width: 240,
    borderRadius: 20,
    bottom: 80,
  },
});
