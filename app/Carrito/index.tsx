import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

const CartScreen = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "LEGO FORTNITE", description: "Fantasy, Violence 10+", image: require("../../assets/lego_fortnite.png") },
    { id: 2, title: "Prince of Persia: The Lost Crown", description: "Action, Adventure 12+", image: require("../../assets/prince_of_persia.png") },
  ]);

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mi carrito de compras</Text>

      <ScrollView style={styles.scrollContainer} contentContainerStyle={{ paddingBottom: 20 }}>
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <View key={item.id} style={styles.itemContainer}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(item.id)}>
                  <Text style={styles.removeText}>Eliminar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.wishlistButton} onPress={() => router.push("/wishlist")}>
                  <Text style={styles.wishlistText}>Lista de Deseos</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.emptyCart}>Tu carrito está vacío</Text>
        )}

        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>Resumen de compra</Text>
          <Text style={styles.summaryText}>Precio: COP</Text>
          <Text style={styles.summaryText}>SubTotal: COP</Text>
        </View>

        <TouchableOpacity style={styles.checkoutButton} onPress={() => router.push("/Carrito/PaymentScreen")}>
          <Text style={styles.checkoutText}>Finalizar Compra</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => router.push("/home")}>
          <Icon name="home" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/cart")}>
          <Icon name="shopping-cart" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/wishlist")}>
          <Icon name="heart" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/gifts")}>
          <Icon name="gift" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20, 
    justifyContent: "space-between", 
  },
  header: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 60,
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#111",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
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
    padding: 8,
    borderRadius: 5,
    width: "60%",
    alignItems: "center",
    marginBottom: 5,
  },
  removeText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  wishlistButton: {
    borderWidth: 1,
    borderColor: "#fff",
    padding: 8,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  wishlistText: {
    color: "#fff",
    fontSize: 14,
  },
  summaryContainer: {
    backgroundColor: "#111",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
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
    marginBottom: 20,
  },
  checkoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
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
  emptyCart: {
    textAlign: "center",
    color: "#aaa",
    fontSize: 18,
    marginTop: 20,
  },
});

export default CartScreen;
