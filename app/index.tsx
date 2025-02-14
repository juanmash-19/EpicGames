import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function AppLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="login"
          options={{
            drawerLabel: 'Autenticación',
            title: 'Autenticación',
          }}
        />
        <Drawer.Screen
          name="register"
          options={{
            drawerLabel: 'Registrarse',
            title: 'Registrarse',
          }}
        />
        <Drawer.Screen
          name="GameStore"
          options={{
            drawerLabel: 'Games Store',
            title: 'Games Store',
          }}
        />
        <Drawer.Screen
          name="WishList"
          options={{
            drawerLabel: 'Lista de Deseos',
            title: 'Lista de Deseos',
          }}
        />
        <Drawer.Screen
          name="Notices"
          options={{
            drawerLabel: 'Noticias',
            title: 'Noticias',
          }}
        />
        <Drawer.Screen
          name="GameLibrary"
          options={{
            drawerLabel: 'Biblioteca de Juegos',
            title: 'Biblioteca de Juegos',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}