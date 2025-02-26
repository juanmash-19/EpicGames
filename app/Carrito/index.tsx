import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import legoFortnite from "../../assets/lego_fortnite.jpg";
import princeOfPersia from "../../assets/prince_of_persia.jpg";

const CartScreen = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "LEGO FORTNITE", description: "Fantasy, Violence 10+", image: legoFortnite, price: 59900 },
    { id: 2, title: "Prince of Persia: The Lost Crown", description: "Action, Adventure 12+", image: princeOfPersia, price: 159900 },
  ]);

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getTotal = () => cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mi carrito de compras</Text>

      <ScrollView style={styles.cartList}>
        {cartItems.length === 0 ? (
          <Text style={styles.emptyCartText}>Tu carrito está vacío</Text>
        ) : (
          cartItems.map(item => (
            <View key={item.id} style={styles.itemContainer}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <Text style={styles.itemPrice}>COP {item.price.toLocaleString()}</Text>

                <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(item.id)}>
                  <Text style={styles.removeText}>Eliminar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.wishlistButton} onPress={() => router.push("/wishlist")}>
                  <Text style={styles.wishlistText}>Lista de Deseos</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>

      {cartItems.length > 0 && (
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>Resumen de compra</Text>
          <Text style={styles.summaryText}>Subtotal: COP {getTotal().toLocaleString()}</Text>
        </View>
      )}

      <TouchableOpacity
        style={[styles.checkoutButton, cartItems.length === 0 && styles.disabledButton]}
        onPress={() => cartItems.length > 0 && router.push("/Carrito/PaymentScreen")}
        disabled={cartItems.length === 0}
      >
        <Text style={styles.checkoutText}>Finalizar Compra</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  header: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  cartList: {
    flex: 1,
  },
  emptyCartText: {
    color: "#aaa",
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
  },
  itemContainer: {
    flexDirection: "row", // 🔹 Alinea la imagen y los detalles en fila
    backgroundColor: "#111",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  image: {
    width: 80, // 🔹 Reducimos el tamaño de la imagen
    height: 80,
    borderRadius: 5,
    resizeMode: "contain", // 🔹 Asegura que la imagen no se deforme
  },
  itemDetails: {
    marginLeft: 10,
    flexShrink: 1, // 🔹 Evita que la imagen haga que el texto se salga de la pantalla
  },
  itemTitle: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  itemDescription: {
    fontSize: 12,
    color: "#aaa",
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: "#fff",
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
    textAlign: "center",
  },
  summaryText: {
    fontSize: 16,
    color: "#aaa",
    textAlign: "center",
  },
  checkoutButton: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "gray",
  },
  checkoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CartScreen;
