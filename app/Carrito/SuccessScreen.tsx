import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const SuccessScreen = () => {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <Text style={styles.successText}>✅ ¡Pago Exitoso!</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/home")}>
        <Text style={styles.buttonText}>Volver al Inicio</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  successText: { fontSize: 24, fontWeight: "bold", color: "green", marginBottom: 20 },
  button: { backgroundColor: "blue", padding: 15, borderRadius: 5 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default SuccessScreen;
