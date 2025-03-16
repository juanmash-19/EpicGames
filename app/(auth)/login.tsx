import React, { useState, useEffect } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, 
  Image, Linking, Alert 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { login } from "../../libs/auth/ServiceLogin/api-services";
import { storeToken } from "../../libs/auth/StoreToken";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
    loadCredentials();
  }, []);

  // Cargar credenciales almacenadas
  const loadCredentials = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem("userEmail");
      const storedPassword = await AsyncStorage.getItem("userPassword");
      if (storedEmail) setEmail(storedEmail);
      if (storedPassword) setPassword(storedPassword);
    } catch (error) {
      console.error("Error al cargar las credenciales", error);
    }
  };

  // Validar formato del correo y contraseña
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("❌ Correo electrónico inválido.");
      return false;
    }
    if (password.length < 6) {
      setError("❌ La contraseña debe tener al menos 6 caracteres.");
      return false;
    }
    setError("");
    return true;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;
    console.log("No errores");
        const userdata = {
          email,
          password
        }
    
        login(userdata)
        .then((response)=> response.json())
        .then((data)=> {
          storeToken(data.token)
        })
        .catch(()=> console.log ("Fallo"))
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} resizeMode="contain" />
      
      <Text style={styles.title}>Inicia Sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>

      {/* Redes Sociales */}
      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.xbox.com/")}> 
          <Image source={require("../../assets/xbox.png")} style={styles.socialLogo} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.google.com/")}> 
          <Image source={require("../../assets/google.png")} style={[styles.socialLogo, styles.googleLogo]} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.playstation.com/")}> 
          <Image source={require("../../assets/play.png")} style={styles.socialLogo} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor: "#000",
    width: "100%"
  },
  logo: {
    width: 100,  
    height: 100, 
    marginBottom: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff", 
  },
  input: {
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 8,
    marginBottom: 15, 
    color: "#fff",
    backgroundColor: "#111",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    width: 300,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  socialLogo: {
    width: 60,
    height: 60,
    marginHorizontal: 5,
  },
  googleLogo: {
    width: 150,
    height: 150,
  },
});

export default LoginPage;
