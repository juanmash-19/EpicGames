import React from "react";
import { Image, StyleSheet } from "react-native";

const GameImage = ({ source }) => (
  <Image source={source} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 140,
    borderRadius: 10,
  },
});

export default GameImage;
