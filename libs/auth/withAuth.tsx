import React, { useState, useCallback } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import { jwtDecode } from "jwt-decode";

// Definimos el tipo del token decodificado
interface DecodedToken {
  user: {
    rol: string;
  };
  exp: number;
}

const withAuth = (WrappedComponent: React.ComponentType<any>, requiredRol: string | null = null) => {
  return (props: any) => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRol, setUserRol] = useState<string | null>(null);
    const router = useRouter();

    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");

        if (!token) {
          console.warn("🚫 No hay token, redirigiendo al Login...");
          setIsAuthenticated(false);
          setTimeout(() => router.replace("/login"), 1000);
          return;
        }

        console.log("🔍 Token recuperado:", token);

        // 🛑 Validar formato del token antes de decodificarlo
        if (!token.includes(".")) {
          console.error("❌ Formato de token inválido.");
          setIsAuthenticated(false);
          setTimeout(() => router.replace("/login"), 1000);
          return;
        }

        // ✅ Decodificar el token
        const payload: DecodedToken = jwtDecode(token);
        console.log("✅ Token decodificado:", payload);

        // 📌 Verificar expiración del token
        const currentTime = Math.floor(Date.now() / 1000);
        if (payload.exp < currentTime) {
          console.warn("⏳ Token expirado. Eliminando y redirigiendo...");
          await AsyncStorage.removeItem("authToken");
          setIsAuthenticated(false);
          setTimeout(() => router.replace("/login"), 1000);
          return;
        }

        // ✅ Usuario autenticado
        const rolUsuario = payload.user.rol?.trim().toLowerCase(); // 🔄 Normalización
        console.log("✅ Usuario autenticado con rol:", rolUsuario);

        setIsAuthenticated(true);
        setUserRol(rolUsuario);
      } catch (error) {
        console.error("❌ Error verificando autenticación:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    // 🔄 Se ejecuta cada vez que la pantalla se muestra de nuevo
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

    // 📌 Verificar permisos de acceso según el rol (corregido)
    if (requiredRol) {
      const rolRequerido = requiredRol.trim().toLowerCase(); // 🔄 Normalización

      console.log(`📌 Comparando roles -> Requerido: '${rolRequerido}', Usuario: '${userRol}'`);

      if (!userRol || userRol !== rolRequerido) {
        console.warn("🚫 Acceso denegado para rol:", userRol);
        setTimeout(() => router.replace("/Home"), 1000);
        return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" }}>
            <Text style={{ color: "#fff", fontSize: 18 }}>No tienes permisos para acceder aquí.</Text>
          </View>
        );
      }
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
