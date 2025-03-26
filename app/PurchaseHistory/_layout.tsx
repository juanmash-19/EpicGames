import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

interface Purchase {
  id: string;
  gameTitle: string;
  date: string;
  price: string;
}

// Datos de ejemplo
const purchaseData: Purchase[] = [
  { id: "1", gameTitle: "Cyberpunk 2077", date: "2025-03-10", price: "$49.99" },
  { id: "2", gameTitle: "Elden Ring", date: "2025-02-28", price: "$59.99" },
  { id: "3", gameTitle: "God of War", date: "2025-01-15", price: "$39.99" },
];

const PurchaseHistory: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Compras</Text>
      {purchaseData.length === 0 ? (
        <Text style={styles.emptyMessage}>No hay compras registradas.</Text>
      ) : (
        <FlatList
          data={purchaseData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.gameTitle}>{item.gameTitle}</Text>
              <Text style={styles.date}>Fecha: {item.date}</Text>
              <Text style={styles.price}>Precio: {item.price}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 15,
  },
  emptyMessage: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 20,
  },
  card: {
    backgroundColor: "#2a2a2a",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  gameTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  date: {
    color: "#bbb",
  },
  price: {
    color: "#4CAF50",
    fontWeight: "bold",
  },
});

export default PurchaseHistory;
