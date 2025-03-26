import { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Drawer } from "expo-router/drawer";
import { Alert } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { Menu, Divider, PaperProvider } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { removeToken, getToken } from '../libs/auth/StoreToken'



import "../global.css";

const HomeLayout = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter();
  const [times, setTimes] = useState(0)
  
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    router.replace("/Home"); 
  }, []);

  useEffect(() => {
    if (times == 0){
      removeToken()
      setTimes(times + 1)
    }
  })

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected as boolean);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const verifySession = async () => {
      const token = await getToken()
      setIsLogged(token != null)
    }
    verifySession()
  }, [getToken()])

  // Resetear el estado del menú al cambiar de pantalla
  useFocusEffect(
    useCallback(() => {
      setMenuVisible(false);
    }, [])
  );

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
                {!isLogged ? (
                  <>
                    <Menu.Item
                      onPress={() => {
                        setMenuVisible(false);
                        router.push("/login");
                      }}
                      title="Iniciar Sesión"
                    />
                    <Divider />
                    <Menu.Item
                      onPress={() => {
                        setMenuVisible(false);
                        router.push("/register");
                      }}
                      title="Registrarse"
                    />
                  </>
                  ) : (
                    <Menu.Item
                      onPress={() => {
                        setMenuVisible(false);
                        removeToken();
                        Alert.alert("Excelente", "Se cerro tu sesión.");
                        router.push("/Home");
                      }}
                      title="Cerrar sesion"
                    />
                  )
                }
              </Menu>
            </View>
          ),
        }}
      >
        <Drawer.Screen name="Home" options={{ drawerLabel: "Home", title: "Inicio" }} />
        <Drawer.Screen name="(auth)" options={{ drawerItemStyle: { height: 0 } }} />
        <Drawer.Screen name="Biblioteca" options={{ drawerLabel: "Biblioteca de Juegos", title: "Biblioteca" }} />
        <Drawer.Screen name="gameStore" options={{ drawerLabel: "Tienda de Juegos", title: "Tienda" }} />
        <Drawer.Screen name="notices"  options={{ drawerLabel: "Noticias", title: "Noticias" }} />
        <Drawer.Screen name="wishlist" options={{ drawerLabel: "Lista de Deseos", title: "Lista de Deseos" }} />
        <Drawer.Screen name="Carrito" options={{ drawerLabel: "Carrito", title: "Carrito" }} />
        <Drawer.Screen name="Games" options={{ drawerLabel: "Gestión de Videojuegos", title: "Gestión de Videojuegos" }} />
        <Drawer.Screen name="Users" options={{ drawerLabel: "Gestión de Usuarios", title: "Gestión de Usuarios" }} />
        <Drawer.Screen name="Profile" options={{ drawerLabel: "Gestión de Perfil", title: "Gestión de Perfil" }} />
      </Drawer>
    </PaperProvider>
  );
};

export default HomeLayout;