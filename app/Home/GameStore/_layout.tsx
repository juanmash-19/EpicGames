import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import GameCard from "../../../components/molecules/GameCard";

const GameStore = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <Text style={styles.header}>Compra de Juegos</Text>

        <GameCard
          image={require("../../../assets/Fornite.jpg")}
          title="The Witcher 3: Wild Hunt"
          description="Vive una aventura épica en un mundo abierto lleno de criaturas y magia."
          price="COP 119,900"
        />

        <GameCard
          image={require("../../../assets/lego_fortnite.png")}
          title="Red Dead Redemption 2"
          description="Explora el salvaje oeste con una historia impactante y un mundo vivo."
          price="COP 149,900"
        />

        <GameCard
          image={require("../../../assets/prince_of_persia.png")}
          title="Cyberpunk 2077"
          description="Sumérgete en Night City con acción, tecnología y decisiones impactantes."
          price="COP 159,900"
        />
      </ScrollView>
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
});

export default GameStore;
