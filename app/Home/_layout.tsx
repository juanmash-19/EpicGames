import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

const Index = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: "#000" }, 
        tabBarActiveTintColor: "#fff", 
        tabBarInactiveTintColor: "#888", 
        tabBarIcon: ({ color, size }) => {
          let iconName = "";

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "GameStore":
              iconName = "shopping-cart";
              break;
            case "WishList":
              iconName = "heart";
              break;
            case "GameLibrary":
              iconName = "book";
              break;
            case "Notices":
              iconName = "newspaper-o";
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >

      <Tabs.Screen name="Home" options={{ title: "Home" }} />
      <Tabs.Screen name="GameStore" options={{ title: "Tienda" }} />
      <Tabs.Screen name="WishList" options={{ title: "Lista de Deseos" }} />
      <Tabs.Screen name="GameLibrary" options={{ title: "Biblioteca" }} />
      <Tabs.Screen name="Notices" options={{ title: "Noticias" }} />
    </Tabs>
  );
};

export default Index;

