import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground, Linking } from "react-native";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    console.log("Login con:", { email });
  };

  return (
    <ImageBackground source={require("../(auth)/fondo.jpg")} style={styles.background}>
      <View style={styles.container}>
        <Image source={require("../(auth)/logo.png")} style={styles.logo} resizeMode="contain" />
        
        <Text style={styles.title}>Inicia Sesión</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Correo :"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>

        <View style={styles.socialContainer}>
          <TouchableOpacity onPress={() => Linking.openURL("https://www.xbox.com/")}>
            <Image source={require("../(auth)/xbox.png")} style={styles.socialLogo} resizeMode="contain" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL("https://www.google.com/")}>
            <Image source={require("../(auth)/google.png")} style={[styles.socialLogo, styles.googleLogo]} resizeMode="contain" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL("https://www.playstation.com/")}>
            <Image source={require("../(auth)/play.png")} style={styles.socialLogo} resizeMode="contain" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover", 
    justifyContent: "center", 
    alignItems: "center"
  },
  container: {
    justifyContent: "flex-start", 
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    paddingTop: 120,
    flex: 1,
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
    marginBottom: 25, 
    color: "#fff",
    backgroundColor: "#111",
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