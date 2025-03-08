import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

const GameLibrary = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <Text style={styles.header}>Compra de Juegos</Text>

        <View style={styles.gameItem}>
          <Image source={require("../../../assets/Fornite.jpg")} style={styles.image} />
          <Text style={styles.title}>The Witcher 3: Wild Hunt</Text>
          <Text style={styles.description}>
            Vive una aventura épica en un mundo abierto lleno de criaturas y magia.
          </Text>
          <Text style={styles.price}>COP 119,900</Text>
          <TouchableOpacity onPress={() => router.push("/juego1")}>
            <Text style={styles.details}>Ver Detalles</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gameItem}>
          <Image source={require("../../../assets/lego_fortnite.png")} style={styles.image} />
          <Text style={styles.title}>Red Dead Redemption 2</Text>
          <Text style={styles.description}>
            Explora el salvaje oeste con una historia impactante y un mundo vivo.
          </Text>
          <Text style={styles.price}>COP 149,900</Text>
          <TouchableOpacity onPress={() => router.push("/juego1")}>
            <Text style={styles.details}>Ver Detalles</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gameItem}>
          <Image source={require("../../../assets/prince_of_persia.png")} style={styles.image} />
          <Text style={styles.title}>Cyberpunk 2077</Text>
          <Text style={styles.description}>
            Sumérgete en Night City con acción, tecnología y decisiones impactantes.
          </Text>
          <Text style={styles.price}>COP 159,900</Text>
          <TouchableOpacity onPress={() => router.push("/juego1")}>
            <Text style={styles.details}>Ver Detalles</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Barra de Navegación Inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => router.push("/home")}>
          <Icon name="home" size={25} color="#fff" style={styles.navItem} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/store")}>
          <Icon name="shopping-cart" size={25} color="#fff" style={styles.navItem} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/wishlist")}>
          <Icon name="heart" size={25} color="#fff" style={styles.navItem} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/profile")}>
          <Icon name="gift" size={25} color="#fff" style={styles.navItem} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
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
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#000",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    padding: 10,
  },
});

export default GameLibrary;
