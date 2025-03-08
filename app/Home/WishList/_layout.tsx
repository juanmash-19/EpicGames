import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome"; // Importación de los íconos

const WishlistScreen = () => {
  const [showGenre, setShowGenre] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showPlatform, setShowPlatform] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
        <Text style={styles.header}>Lista de deseos</Text>

        <View style={styles.wishlistItem}>
          <Image source={require("../../../assets/Fornite.jpg")} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.title}>FORNITE</Text>
            <Text style={styles.description}>Violence, Blood, Teen</Text>
            <TouchableOpacity>
              <Text style={styles.removeText}>Eliminar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Añadir al carrito</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterItem} onPress={() => setShowGenre(!showGenre)}>
            <Text style={styles.filterText}>GÉNERO</Text>
            <AntDesign name={showGenre ? "up" : "down"} size={20} color="white" />
          </TouchableOpacity>
          {showGenre && <Text style={styles.filterOptions}>Acción, Aventura, Battle Royale</Text>}

          <TouchableOpacity style={styles.filterItem} onPress={() => setShowFeatures(!showFeatures)}>
            <Text style={styles.filterText}>CARACTERÍSTICAS</Text>
            <AntDesign name={showFeatures ? "up" : "down"} size={20} color="white" />
          </TouchableOpacity>
          {showFeatures && <Text style={styles.filterOptions}>Multijugador, Cross-Play</Text>}

          <TouchableOpacity style={styles.filterItem} onPress={() => setShowPlatform(!showPlatform)}>
            <Text style={styles.filterText}>PLATAFORMA</Text>
            <AntDesign name={showPlatform ? "up" : "down"} size={20} color="white" />
          </TouchableOpacity>
          {showPlatform && <Text style={styles.filterOptions}>PC, PlayStation, Xbox</Text>}
        </View>
      </ScrollView>

      {/* 🔹 Barra de Navegación */}
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
    backgroundColor: "#000",
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 15,
  },
  wishlistItem: {
    backgroundColor: "#111",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 140,
    borderRadius: 10,
  },
  details: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  description: {
    fontSize: 14,
    color: "#aaa",
    marginVertical: 5,
  },
  removeText: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#8000ff",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  filterContainer: {
    marginTop: 20,
  },
  filterItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#222",
    padding: 10,
    borderRadius: 8,
    marginBottom: 5,
  },
  filterText: {
    color: "#fff",
    fontSize: 16,
  },
  filterOptions: {
    color: "#aaa",
    padding: 10,
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#000",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default WishlistScreen;
