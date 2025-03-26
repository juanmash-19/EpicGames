import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import withAuth from "../../libs/auth/withAuth";

const ProfileScreen = () => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const storedToken = await AsyncStorage.getItem("authToken");
      setToken(storedToken);

      if (storedToken) {
        try {
          const res = await fetch("http://192.168.1.17:4000/api/v1/users/profile", {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });

          if (res.ok) {
            const data = await res.json();
            setName(data.name || "");
            setLastname(data.lastname || "");
            setEmail(data.email || "");
            setCountry(data.country || "");
          } else {
            Alert.alert("Error", "No se pudo cargar la información del perfil.");
          }
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      }

      setLoading(false);
    };

    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    if (!token) return;

    const payload = {
      name,
      lastname,
      email,
      country,
      currentPassword,
      newPassword,
    };

    try {
      const res = await fetch("http://192.168.1.17:4000/api/v1/users/profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        Alert.alert("Perfil actualizado correctamente");
        setCurrentPassword("");
        setNewPassword("");
      } else {
        const error = await res.json();
        Alert.alert("Error", error.message || "No se pudo actualizar el perfil");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      Alert.alert("Error", "Ocurrió un error inesperado");
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
    <View style={styles.container}>
      <Text style={styles.header}>Gestión de Perfil</Text>

      <Text style={styles.label}>Nombre</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Apellido</Text>
      <TextInput style={styles.input} value={lastname} onChangeText={setLastname} />

      <Text style={styles.label}>Correo Electrónico</Text>
      <TextInput style={styles.input} value={email} editable={false} />

      <Text style={styles.label}>País</Text>
      <TextInput style={styles.input} value={country} onChangeText={setCountry} />

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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
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
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#111",
    color: "#fff",
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
  },
  updateButton: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
  },
  updateText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default withAuth(ProfileScreen, "user");
