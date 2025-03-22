import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  return (props: any) => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
        try {
          const token = await AsyncStorage.getItem("authToken");
          console.log("🔍 Token recuperado de AsyncStorage:", token);

          if (!token) {
            console.log("🚫 No hay token, usuario NO autenticado.");
            setIsAuthenticated(false);
            setTimeout(() => router.replace("/Login"), 1000);
            return;
          }

          // 📌 Verificar estructura del token
          const parts = token.split(".");
          if (parts.length !== 3) {
            console.log("⚠️ Token inválido, redirigiendo...");
            setIsAuthenticated(false);
            await AsyncStorage.removeItem("authToken");
            setTimeout(() => router.replace("/Login"), 1000);
            return;
          }

          // 📌 Decodificar el payload del token
          const payloadBase64 = parts[1];
          const payload = JSON.parse(atob(payloadBase64)); // Decodifica el JWT
          console.log("📜 Payload decodificado:", payload);

          // 📌 Verificar expiración del token
          const currentTime = Math.floor(Date.now() / 1000);
          console.log(`⏳ Exp: ${payload.exp}, Now: ${currentTime}`);

          if (payload.exp < currentTime) {
            console.log("⏳ Token expirado. Eliminando y redirigiendo...");
            await AsyncStorage.removeItem("authToken");
            setIsAuthenticated(false);
            setTimeout(() => router.replace("/Login"), 1000);
            return;
          }

          console.log("✅ Usuario autenticado.");
          setIsAuthenticated(true);
        } catch (error) {
          console.error("🚨 Error verificando autenticación:", error);
          setIsAuthenticated(false);
        } finally {
          setLoading(false);
        }
      };

      checkAuth();
    }, []);

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
