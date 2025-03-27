import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Carrito" }} />
      <Stack.Screen name="PaymentScreen" options={{ title: "Pago" }} />
      <Stack.Screen name="SuccessScreen" options={{ title: "success" }} />
    </Stack>
  );
};

export default Layout;
