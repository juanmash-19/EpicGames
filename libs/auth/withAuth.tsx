import React, { useState, useCallback } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useFocusEffect } from "@react-navigation/native"; 

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  return (props: any) => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        console.log("Token recuperado:", token);

        if (!token) {
          console.log(" No hay token, redirigiendo al Login...");
          setIsAuthenticated(false);
          setTimeout(() => router.replace("/Login"), 1000);
          return;
        }

        //  Decodificar el token
        const payload = JSON.parse(atob(token.split(".")[1]));
        console.log(" Payload decodificado:", payload);

        // 📌 Verificar expiración del token
        const currentTime = Math.floor(Date.now() / 1000);
        if (payload.exp < currentTime) {
          console.log(" Token expirado. Eliminando y redirigiendo...");
          await AsyncStorage.removeItem("authToken");
          setIsAuthenticated(false);
          setTimeout(() => router.replace("/Login"), 1000);
          return;
        }

        console.log(" Usuario autenticado.");
        setIsAuthenticated(true);
      } catch (error) {
        console.error(" Error verificando autenticación:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    //  Se ejecuta cada vez que la pantalla se muestra de nuevo
    useFocusEffect(
      useCallback(() => {
        setLoading(true);
        checkAuth();
      }, [])
    );

    if (loading) {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" }}>
          <ActivityIndicator size="large" color="#007bff" />
          <Text style={{ color: "#fff", fontSize: 18, marginTop: 10 }}>Verificando sesión...</Text>
        </View>
      );
    }

    if (!isAuthenticated) {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" }}>
          <Text style={{ color: "#fff", fontSize: 18 }}>No tienes acceso. Redirigiendo...</Text>
        </View>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
