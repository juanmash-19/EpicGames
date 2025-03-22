import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "authToken"; // 🔹 Usa una clave consistente

// Guardar token
export const storeToken = async (token: string) => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);
    console.log("✅ Token guardado correctamente:", token);
  } catch (error) {
    console.error("🚨 Error al guardar el token:", error);
  }
};

// Obtener token
export const getToken = async (): Promise<string | null> => {
  try {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    console.log("🔍 Token recuperado de AsyncStorage:", token);
    return token;
  } catch (error) {
    console.error("🚨 Error al obtener el token:", error);
    return null;
  }
};

// Eliminar token
export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
    console.log("🗑️ Token eliminado correctamente");
  } catch (error) {
    console.error("🚨 Error al eliminar el token:", error);
  }
};
