import React from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

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

const GameLibrary = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
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

      <View style={styles.bottomNav}>
        <Icon name="home" size={25} color="#fff" />
        <Icon name="shopping-cart" size={25} color="#fff" />
        <Icon name="heart" size={25} color="#fff" />
        <Icon name="gift" size={25} color="#fff" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
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
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#000",
  },
});

export default GameLibrary;