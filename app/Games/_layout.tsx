import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert, Image, ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; 
import * as ImagePicker from "expo-image-picker"; 
import withAuth from "../../libs/auth/withAuth"; 
import { videogameService, Videogame } from "../../libs/auth/ServiceGame/api-service";

const AddGameScreen = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState<string | null>(null); 
  const [videojuegos, setVideojuegos] = useState<Videogame[]>([]); 


  useEffect(() => {
    const fetchVideojuegos = async () => {
      try {
        const juegos = await videogameService.getAll();
        console.log("Datos recibidos del backend:", juegos);
        setVideojuegos(juegos);
      } catch (error) {
        console.error("Error al obtener los videojuegos:", error);
        Alert.alert("Error", "No se pudieron cargar los videojuegos.");
      }
    };

    fetchVideojuegos();
  }, []);

  const seleccionarImagen = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permiso denegado", "Se necesita acceso a la galería para seleccionar una imagen.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImagen(result.assets[0].uri);
      console.log("Imagen seleccionada:", result.assets[0].uri);
    }
  };

  // Función para guardar un videojuego
  const guardarVideojuego = async () => {
    if (!nombre || !descripcion || !precio || !imagen) {
      Alert.alert("Error", "Por favor, completa todos los campos antes de guardar.");
      return;
    }

    try {
      const nuevoVideojuego: Videogame = {
        name: nombre,
        description: descripcion,
        price: parseFloat(precio),
        image: imagen,
      };

      const videojuegoGuardado = await videogameService.create(nuevoVideojuego);
      console.log("Videojuego guardado:", videojuegoGuardado);

      setVideojuegos((prevVideojuegos) => [...prevVideojuegos, videojuegoGuardado]);

      setNombre("");
      setDescripcion("");
      setPrecio("");
      setImagen(null);

      Alert.alert("Éxito", "El videojuego se guardó correctamente.");
    } catch (error) {
      console.error("Error al guardar el videojuego:", error);
      Alert.alert("Error", "No se pudo guardar el videojuego. Inténtalo de nuevo.");
    }
  };

  const renderItem = ({ item }: { item: Videogame }) => {
    const imageUrl =
      typeof item.image === "string"
        ? item.image
        : "https://via.placeholder.com/150";

    return (
      <View style={styles.gameItem}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.gameImage}
        />
        <View style={styles.gameInfo}>
          <Text style={styles.gameName}>{item.name}</Text>
          <Text style={styles.gameDescription}>{item.description}</Text>
          <Text style={styles.gamePrice}>
            Precio: ${typeof item.price === "number" ? item.price.toFixed(2) : "No disponible"}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={[styles.scrollContainer, { backgroundColor: "#000" }]}>
      <ImageBackground
        source={{ uri: "https://example.com/background-image.jpg" }}
        style={styles.background}
      >
        <View style={styles.overlay} />
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <FontAwesome5 name="gamepad" size={32} color="#fff" style={styles.icon} />
            <Text style={styles.header}>Agregar Videojuego</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            placeholderTextColor="#aaa"
            value={nombre}
            onChangeText={setNombre}
          />
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
          <TouchableOpacity style={styles.imagePickerButton} onPress={seleccionarImagen}>
            <Text style={styles.buttonText}>Seleccionar Imagen</Text>
          </TouchableOpacity>
          {imagen && (
            <Image
              source={{ uri: imagen }}
              style={{ width: 100, height: 100, marginBottom: 15, borderRadius: 10 }}
            />
          )}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.saveButton} onPress={guardarVideojuego}>
              <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => Alert.alert("Cancelar")}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.gamesListContainer, { paddingBottom: 20 }]}>
          <Text style={styles.gamesListHeader}>Videojuegos Agregados</Text>
          {videojuegos.map((juego, index) => (
            <View key={index} style={styles.gameItem}>
              <Image
                source={{ uri: typeof juego.image === "string" ? juego.image : "https://via.placeholder.com/150" }}
                style={styles.gameImage}
              />
              <View style={styles.gameInfo}>
                <Text style={styles.gameName}>{juego.name}</Text>
                <Text style={styles.gameDescription}>{juego.description}</Text>
                <Text style={styles.gamePrice}>
                  Precio: ${typeof juego.price === "number" ? juego.price.toFixed(2) : "No disponible"}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: "#000", 
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    padding: 20,
    borderRadius: 15,
    margin: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    backgroundColor: "#333",
    color: "#fff",
    padding: 15,
    borderRadius: 12, 
    marginBottom: 15,
  },
  imagePickerButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 12, 
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#dc3545",
    padding: 15,
    borderRadius: 12, 
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18, 
  },
  gamesListContainer: {
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: 12,
    marginTop: 20,
  },
  gamesListHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  gameItem: {
    flexDirection: "row",
    marginBottom: 15,
    backgroundColor: "#222",
    padding: 10,
    borderRadius: 10,
  },
  gameImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  gameInfo: {
    flex: 1,
  },
  gameName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  gameDescription: {
    fontSize: 14,
    color: "#aaa",
    marginVertical: 5,
  },
  gamePrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#28a745",
  },
});

export default withAuth(AddGameScreen, "admin");