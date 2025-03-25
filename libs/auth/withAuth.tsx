import React, { useState, useCallback } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  user: {
    rol: string;
  };
  exp: number;
}

const withAuth = (
  WrappedComponent: React.ComponentType<any>,
  requiredRol: string | null = null
) => {
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
          return setTimeout(() => router.replace("/login"), 1000);
        }

        console.log("🔍 Token recuperado:", token);

        if (!token.includes(".")) {
          console.error("❌ Formato de token inválido.");
          setIsAuthenticated(false);
          return setTimeout(() => router.replace("/login"), 1000);
        }

        // Decodifica el token
        const payload: DecodedToken = jwtDecode(token);
        console.log("✅ Token decodificado:", payload);

        // Verifica expiración del token
        const currentTime = Math.floor(Date.now() / 1000);
        if (payload.exp < currentTime) {
          console.warn("⏳ Token expirado. Eliminando y redirigiendo...");
          await AsyncStorage.removeItem("authToken");
          setIsAuthenticated(false);
          return setTimeout(() => router.replace("/login"), 1000);
        }

        // 🔹 Normaliza el rol del usuario
        let rolUsuario = payload.user.rol?.trim().toLowerCase();
        if (rolUsuario === "administrador") {
          rolUsuario = "admin"; // 🔥 Convertimos "administrador" a "admin"
        } else if (rolUsuario === "usuario") {
          rolUsuario = "user"; // 🔥 Convertimos "usuario" a "user"
        }

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

    useFocusEffect(
      useCallback(() => {
        setLoading(true);
        checkAuth();
      }, [])
    );

    if (loading) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000",
          }}
        >
          <ActivityIndicator size="large" color="#007bff" />
          <Text style={{ color: "#fff", fontSize: 18, marginTop: 10 }}>
            Verificando sesión...
          </Text>
        </View>
      );
    }

    if (!isAuthenticated) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>
            No tienes acceso. Redirigiendo...
          </Text>
        </View>
      );
    }

    // 🚨 Restricción para que ADMIN no acceda al carrito
    const rutaActual = props.route?.name || ""; // Obtiene la ruta actual
    if (userRol === "admin" && rutaActual === "/carrito") {
      console.warn("🚫 Administrador no tiene acceso al carrito.");
      setTimeout(() => router.replace("/Home"), 1000);
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>
            No tienes permisos para acceder aquí.
          </Text>
        </View>
      );
    }

    // 🔹 Verifica permisos de acceso según el rol
    if (requiredRol) {
      let rolRequerido = requiredRol.trim().toLowerCase();
      if (rolRequerido === "administrador") {
        rolRequerido = "admin"; // 🔥 Convertimos "administrador" a "admin"
      } else if (rolRequerido === "usuario") {
        rolRequerido = "user"; // 🔥 Convertimos "usuario" a "user"
      }

      console.log(
        `📌 Comparando roles -> Requerido: '${rolRequerido}', Usuario: '${userRol}'`
      );

      if (!userRol || userRol !== rolRequerido) {
        console.warn("🚫 Acceso denegado para rol:", userRol);
        setTimeout(() => router.replace("/Home"), 1000);
        return (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#000",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>
              No tienes permisos para acceder aquí.
            </Text>
          </View>
        );
      }
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
