import { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Drawer } from "expo-router/drawer";
import NetInfo from "@react-native-community/netinfo";
import { Menu, Divider, PaperProvider } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";

import "../global.css";

const HomeLayout = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected as boolean);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <PaperProvider>
      <Drawer
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#000",
          },
          drawerLabelStyle: {
            color: "#fff",
          },
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerRight: () => (
            <View style={{ marginRight: 15 }}>
              <Menu
                visible={menuVisible}
                onDismiss={() => setMenuVisible(false)}
                anchor={
                  <TouchableOpacity onPress={() => setMenuVisible(true)}>
                    <Icon name="user" size={28} color="#fff" />
                  </TouchableOpacity>
                }
              >
                <Menu.Item onPress={() => router.push("/login")} title="Iniciar Sesión" />
                <Divider />
                <Menu.Item onPress={() => router.push("/register")} title="Registrarse" />
              </Menu>
            </View>
          ),
        }}
      >
        <Drawer.Screen name="Home" options={{ drawerLabel: "Home", title: "Home" }} />
        <Drawer.Screen name="(auth)" options={{ drawerLabel: "Autenticación", title: "Autenticación" }} />
        <Drawer.Screen name="gameLibrary" options={{ drawerLabel: "Biblioteca de Juegos", title: "Biblioteca" }} />
        <Drawer.Screen name="gameStore" options={{ drawerLabel: "Tienda de Juegos", title: "Tienda" }} />
        <Drawer.Screen name="notices" options={{ drawerLabel: "Noticias", title: "Noticias" }} />
        <Drawer.Screen name="wishlist" options={{ drawerLabel: "Lista de Deseos", title: "Lista de Deseos" }} />
      </Drawer>
    </PaperProvider>
  );
};

export default HomeLayout;
