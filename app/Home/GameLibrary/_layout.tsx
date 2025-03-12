import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Library from "../../../components/molecules/Library"; // Se importa el nuevo componente

const GameLibrary = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Library />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
});

export default GameLibrary;
