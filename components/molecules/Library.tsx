import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

const games = [
  {
    id: "1",
    title: "Doors - Paradox",
    image: require("../../assets/biblioteca1.png"),
  },
  {
    id: "2",
    title: "Marvel's Guardians of the Galaxy",
    image: require("../../assets/biblioteca2.png"),
  },
  {
    id: "3",
    title: "Snakebird Complete",
    image: require("../../assets/biblioteca3.png"),
  },
];

const Library = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Biblioteca</Text>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.gameCard}>
            <Text style={styles.gameTitle}>{item.title}</Text>
            <Image source={item.image} style={styles.gameImage} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  gameCard: {
    backgroundColor: "#222",
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  gameImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  gameTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Library;
