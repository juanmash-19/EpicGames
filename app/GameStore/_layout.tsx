import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const games = [
  {
    id: "1",
    title: "Prince of Persia: The Lost Crown",
    description: "Sumérgete en un emocionante y sofisticado juego de plataformas de acción y aventura.",
    price: "COP 199,900",
  },
  {
    id: "2",
    title: "LEGO® Fortnite®",
    description: "Explora vastos mundos abiertos donde la magia de LEGO® y Fortnite se fusionan.",
    price: "Gratis",
  },
];

const EpicGamesStore = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.gameCard}>
            <View style={styles.imagePlaceholder} />
            <Text style={styles.gameTitle}>{item.title}</Text>
            <Text style={styles.gameDescription}>{item.description}</Text>
            <Text style={styles.gamePrice}>{item.price}</Text>
          </View>
        )}
      />

      <View style={styles.bottomNav}>
        <Icon name="home" size={25} color="#fff" />
        <Icon name="shopping-cart" size={25} color="#fff" /> 
        <Icon name="heart" size={25} color="#fff" /> 
        <Icon name="gift" size={25} color="#fff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Fondo negro
  },
  gameCard: {
    backgroundColor: "#222",
    margin: 10,
    padding: 15,
    borderRadius: 10,
  },
  imagePlaceholder: {
    height: 150,
    backgroundColor: "#444",
    borderRadius: 10,
  },
  gameTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  gameDescription: {
    color: "#aaa",
    fontSize: 14,
    marginVertical: 5,
  },
  gamePrice: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#111",
  },
});

export default EpicGamesStore;
