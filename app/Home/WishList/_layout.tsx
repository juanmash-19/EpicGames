import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import WishlistList from "../../../components/organisms/WishlistList";
import Filters from "../../../components/organisms/Filters";

const WishlistScreen = () => {
  const games = [{ title: "FORNITE", description: "Violence, Blood, Teen", image: require("../../../assets/Fornite.jpg") }];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
        <WishlistList games={games} />
        <Filters />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", paddingHorizontal: 15 },
});

export default WishlistScreen;
