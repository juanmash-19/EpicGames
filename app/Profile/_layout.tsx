import React, { useState, useEffect } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, 
  ActivityIndicator, Alert, ScrollView 
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import withAuth from "../../libs/auth/withAuth";
import { fetchUserProfile, updateUserProfile } from "../../libs/auth/ServiceProfile/api-services";

const ProfileScreen = () => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const loadProfile = async () => {
      const storedToken = await AsyncStorage.getItem("authToken");
      setToken(storedToken);

      if (storedToken) {
        const data = await fetchUserProfile(storedToken);
        if (data) {
          setName(data.name || "");
          setLastname(data.lastname || "");
          setEmail(data.email || "");
          setCountry(data.country || "");
          setUsername(data.username || "");
        } else {
          Alert.alert("Error", "No se pudo cargar la información del perfil.");
        }
      }

      setLoading(false);
    };

    loadProfile();
  }, []);

  const handleUpdate = async () => {
    if (!token) return;

    const payload = { name, lastname, email, country, username, currentPassword, newPassword };

    try {
      await updateUserProfile(token, payload);
      Alert.alert("Perfil actualizado correctamente");
      setCurrentPassword("");
      setNewPassword("");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Gestión de Perfil</Text>

        {/* Sección de solo lectura */}
        <View style={styles.readOnlySection}>
          <Text style={styles.readOnlyHeader}>Información del Perfil</Text>
          <Text style={styles.readOnlyLabel}>Nombre:</Text>
          <Text style={styles.readOnlyValue}>{name}</Text>
          <Text style={styles.readOnlyLabel}>Apellido:</Text>
          <Text style={styles.readOnlyValue}>{lastname}</Text>
          <Text style={styles.readOnlyLabel}>Correo Electrónico:</Text>
          <Text style={styles.readOnlyValue}>{email}</Text>
          <Text style={styles.readOnlyLabel}>País:</Text>
          <Text style={styles.readOnlyValue}>{country}</Text>
          <Text style={styles.readOnlyLabel}>Nombre de Usuario:</Text>
          <Text style={styles.readOnlyValue}>{username}</Text>
        </View>

        {/* Sección editable */}
        <View style={styles.editableSection}>
          <Text style={styles.editableHeader}>Editar Perfil</Text>

          <Text style={styles.label}>Nombre</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />

          <Text style={styles.label}>Apellido</Text>
          <TextInput style={styles.input} value={lastname} onChangeText={setLastname} />

          <Text style={styles.label}>Correo Electrónico</Text>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} />

          <Text style={styles.label}>País</Text>
          <TextInput style={styles.input} value={country} onChangeText={setCountry} />

          <Text style={styles.label}>Nombre de Usuario</Text>
          <TextInput style={styles.input} value={username} onChangeText={setUsername} />

          <Text style={styles.label}>Contraseña actual</Text>
          <TextInput
            style={styles.input}
            value={currentPassword}
            onChangeText={setCurrentPassword}
            secureTextEntry
          />

          <Text style={styles.label}>Nueva contraseña</Text>
          <TextInput
            style={styles.input}
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
            <Text style={styles.updateText}>Actualizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#000",
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  header: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginTop: 10,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#1c1c1e",
    color: "#fff",
    padding: 12,
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#333",
  },
  updateButton: {
    backgroundColor: "#4caf50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  updateText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  readOnlySection: {
    backgroundColor: "#1c1c1e",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  readOnlyHeader: {
    fontSize: 20,
    color: "#2196f3", // Cambiado a azul
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    textTransform: "uppercase",
  },
  readOnlyLabel: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "500",
  },
  readOnlyValue: {
    color: "#b0bec5", // Color gris claro para los valores
    fontSize: 16,
    marginBottom: 8,
  },
  editableSection: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#1c1c1e",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  editableHeader: {
    fontSize: 20,
    color: "#2196f3", // Cambiado a azul
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default withAuth(ProfileScreen, "user");
