import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Importar íconos de FontAwesome

const AddGameScreen = () => {
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");

  const handleGuardar = () => {
    console.log("Juego guardado:", { descripcion, precio, imagen });
    // Lógica para guardar el videojuego
  };

  const handleCancelar = () => {
    setDescripcion("");
    setPrecio("");
    setImagen("");
  };

  return (
    <ImageBackground
      source={{ uri: "https://example.com/background-image.jpg" }}
      style={styles.background}
    >
      <View style={styles.overlay} /> {/* Efecto de superposición */}
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <FontAwesome5 name="gamepad" size={32} color="#fff" style={styles.icon} />
          <Text style={styles.header}>Agregar Videojuego</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Descripción"
          placeholderTextColor="#aaa"
          value={descripcion}
          onChangeText={setDescripcion}
        />
        <TextInput
          style={styles.input}
          placeholder="Precio"
          placeholderTextColor="#aaa"
          value={precio}
          onChangeText={setPrecio}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="URL de la Imagen"
          placeholderTextColor="#aaa"
          value={imagen}
          onChangeText={setImagen}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.saveButton} onPress={handleGuardar}>
            <Text style={styles.buttonText}>Guardar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancelar}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#000", // Fondo completamente negro
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.85)", // Fondo semitransparente más oscuro
    padding: 20,
    borderRadius: 15, // Bordes más redondeados
    margin: 20,
    shadowColor: "#fff", // Sombra blanca
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10, // Sombra en Android
  },
  header: {
    fontSize: 30, // Tamaño de fuente más grande
    fontWeight: "bold",
    color: "#fff", // Título en blanco
    marginBottom: 20,
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 8, // Sombra más pronunciada
  },
  input: {
    backgroundColor: "#333",
    color: "#fff",
    padding: 15,
    borderRadius: 12, // Bordes más redondeados
    marginBottom: 15,
    borderWidth: 1.5, // Bordes más gruesos
    borderColor: "#fff", // Bordes blancos
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5, // Sombra en Android
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 12, // Bordes más redondeados
    flex: 1,
    marginRight: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6, // Sombra en Android
    transform: [{ scale: 1 }],
  },
  cancelButton: {
    backgroundColor: "#dc3545",
    padding: 15,
    borderRadius: 12, // Bordes más redondeados
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6, // Sombra en Android
    transform: [{ scale: 1 }],
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18, // Texto más grande
    textTransform: "uppercase", // Texto en mayúsculas
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Superposición más oscura
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  icon: {
    marginRight: 10, // Espacio entre el ícono y el texto
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});

export default AddGameScreen;