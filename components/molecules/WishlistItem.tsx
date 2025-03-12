import React from "react";
import { View, StyleSheet } from "react-native";
import GameImage from "../atoms/GameImage";
import TextLabel from "../atoms/TextLabel";
import Button from "../atoms/Button";

const WishlistItem = ({ game }) => (
  <View style={styles.container}>
    <GameImage source={game.image} />
    <View style={styles.details}>
      <TextLabel text={game.title} style={styles.title} />
      <TextLabel text={game.description} />
      <Button title="Eliminar" style={styles.removeButton} />
      <Button title="Añadir al carrito" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  details: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  removeButton: {
    backgroundColor: "#ff4444",
    marginBottom: 10,
  },
});

export default WishlistItem;
