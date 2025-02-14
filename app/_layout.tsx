import { useEffect, useState } from "react";
import { Drawer } from "expo-router/drawer";
import NetInfo from "@react-native-community/netinfo";

import "../global.css";

const HomeLayout = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected as boolean);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Drawer
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#000", // Fondo negro del menú
        },
        drawerLabelStyle: {
          color: "#fff",
        },
        headerStyle: {
          backgroundColor: "#000",
        },
        headerTintColor: "#fff",
      }}
    >
      <Drawer.Screen name="(auth)" options={{ drawerLabel: "Autenticación", title: "Autenticación" }} />
      <Drawer.Screen name="gameLibrary" options={{ drawerLabel: "Biblioteca de Juegos", title: "Biblioteca" }} />
      <Drawer.Screen name="gameStore" options={{ drawerLabel: "Tienda de Juegos", title: "Tienda" }} />
      <Drawer.Screen name="notices" options={{ drawerLabel: "Noticias", title: "Noticias" }} />
      <Drawer.Screen name="wishlist" options={{ drawerLabel: "Lista de Deseos", title: "Lista de Deseos" }} />
    </Drawer>
  );
};

export default HomeLayout;
