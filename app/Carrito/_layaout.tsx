import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mi carrito</Text>
      
      <View style={styles.itemContainer}>
        <Image source={require("../assets/lego_fortnite.jpg")} style={styles.image} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemTitle}>LEGO FORTNITE</Text>
          <Text style={styles.itemDescription}>Fantasy, Violence 10+</Text>
          <TouchableOpacity style={styles.removeButton}>
            <Text style={styles.removeText}>Eliminar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wishlistButton}>
            <Text style={styles.wishlistText}>Lista de Deseos</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Resumen de compra</Text>
        <Text style={styles.summaryText}>Precio: COP</Text>
        <Text style={styles.summaryText}>SubTotal: COP</Text>
      </View>
      
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Finalizar Compra</Text>
      </TouchableOpacity>
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
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#111",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  itemDetails: {
    marginLeft: 15,
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  itemDescription: {
    fontSize: 14,
    color: "#aaa",
    marginBottom: 10,
  },
  removeButton: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
    width: 80,
    alignItems: "center",
  },
  removeText: {
    color: "#fff",
    fontSize: 14,
  },
  wishlistButton: {
    borderWidth: 1,
    borderColor: "#fff",
    padding: 5,
    borderRadius: 5,
    width: 120,
    alignItems: "center",
    marginTop: 5,
  },
  wishlistText: {
    color: "#fff",
    fontSize: 14,
  },
  summaryContainer: {
    backgroundColor: "#111",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 16,
    color: "#aaa",
  },
  checkoutButton: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  checkoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CartScreen;