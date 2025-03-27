import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { fetchPurchaseHistory } from "../../libs/auth/ServicePurchase/api-service"; 

interface Purchase {
  id: string;
  gameTitle: string;
  date: string;
  price: string;
}

const PurchaseHistory: React.FC = () => {
  const [purchaseData, setPurchaseData] = useState<Purchase[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const userId = 14;
  
    const loadPurchases = async () => {
      const data = await fetchPurchaseHistory(userId); // ✅ Pasar el userId
      setPurchaseData(data);
      setLoading(false);
    };
  
    loadPurchases();
  }, []);
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Compras</Text>

      {loading ? (
        <Text style={styles.loading}>Cargando...</Text>
      ) : purchaseData.length === 0 ? (
        <Text style={styles.emptyMessage}>No hay compras registradas.</Text>
      ) : (
        <FlatList
          data={purchaseData}
          keyExtractor={(item) => item.id.toString()}
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
  loading: {
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
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
