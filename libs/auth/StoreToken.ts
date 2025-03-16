import AsyncStorage from '@react-native-async-storage/async-storage';

// Guardar token
export const storeToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('jwtToken', token);
  } catch (error) {
    console.error('Error al guardar el token', error);
  }
};

// Obtener token
export const getToken = async () => {
  try {
    return await AsyncStorage.getItem('jwtToken');
  } catch (error) {
    console.error('Error al obtener el token', error);
    return null;
  }
};

// Eliminar token
export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('jwtToken');
  } catch (error) {
    console.error('Error al eliminar el token', error);
  }
};
