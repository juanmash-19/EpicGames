import React from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const games = [
  {
    id: "1",
    title: "Doors - Paradox",
  },
  {
    id: "2",
    title: "Marvel's Guardians of the Galaxy",
  },
  {
    id: "3",
    title: "Snakebird Complete",
  },
];

const GameLibrary = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.sidebar}>
        <Icon name="bars" size={25} color="#fff" style={styles.icon} />
        <Text style={styles.logo}>EPIC GAMES</Text>
        <Icon name="user-circle" size={25} color="#fff" style={styles.icon} />
      </View>
      
      <View style={styles.container}>
        <Text style={styles.header}>Biblioteca</Text>
        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.gameCard}>
              <View style={styles.imagePlaceholder} />
              <Text style={styles.gameTitle}>{item.title}</Text>
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
    backgroundColor: "#000", // Fondo negro
  },
  sidebar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#000",
  },
  logo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
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
  imagePlaceholder: {
    width: 150,
    height: 200,
    backgroundColor: "#444",
    borderRadius: 10,
  },
  gameTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#000",
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default GameLibrary;
