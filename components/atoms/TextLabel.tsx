import React from "react";
import { Text, StyleSheet } from "react-native";

const TextLabel = ({ text, style }) => (
  <Text style={[styles.text, style]}>{text}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "#fff",
  },
});

export default TextLabel;
