import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const GameDetailScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Imagen del juego */}
      <Image source={{ uri: "https://example.com/game-image.jpg" }} style={styles.gameImage} />
      
      {/* Título */}
      <Text style={styles.title}>The End of the Sun</Text>

      {/* Descripción */}
      <Text style={styles.description}>
        The End of the Sun es una aventura de misterio narrativa en primera persona ambientada en un mundo fantástico eslavo...
      </Text>

      {/* Botones de acción */}
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buttonText}>Comprar ahora</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cartButton}>
        <Text style={styles.buttonText}>Añadir al carrito</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.wishlistButton}>
        <Text style={styles.buttonText}>A la lista de deseos</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  gameImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  description: {
    color: "#ccc",
    marginVertical: 10,
  },
  buyButton: {
    backgroundColor: "#ffa500",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  cartButton: {
    backgroundColor: "#444",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  wishlistButton: {
    backgroundColor: "#666",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default GameDetailScreen;