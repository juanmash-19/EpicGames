import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const GameLibrary = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Compra de Juegos</Text>

      <View style={styles.gameItem}>
        <Image source={require("../../assets/Fornite.jpg")} style={styles.image} />
        <Text style={styles.title}>The Witcher 3: Wild Hunt</Text>
        <Text style={styles.description}>
          Vive una aventura épica en un mundo abierto lleno de criaturas y magia.
        </Text>
        <Text style={styles.price}>COP 119,900</Text>
        <TouchableOpacity>
          <Text style={styles.details}>Ver Detalles</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gameItem}>
        <Image source={require("../../assets/lego_fortnite.png")} style={styles.image} />
        <Text style={styles.title}>Red Dead Redemption 2</Text>
        <Text style={styles.description}>
          Explora el salvaje oeste con una historia impactante y un mundo vivo.
        </Text>
        <Text style={styles.price}>COP 149,900</Text>
        <TouchableOpacity>
          <Text style={styles.details}>Ver Detalles</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gameItem}>
        <Image source={require("../../assets/prince_of_persia.png")} style={styles.image} />
        <Text style={styles.title}>Cyberpunk 2077</Text>
        <Text style={styles.description}>
          Sumérgete en Night City con acción, tecnología y decisiones impactantes.
        </Text>
        <Text style={styles.price}>COP 159,900</Text>
        <TouchableOpacity>
          <Text style={styles.details}>Ver Detalles</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", 
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 15,
  },
  gameItem: {
    backgroundColor: "#111",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#aaa",
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f0",
    marginBottom: 10,
  },
  details: {
    color: "#00aaff",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default GameLibrary;
