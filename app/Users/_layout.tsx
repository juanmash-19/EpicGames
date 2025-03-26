import React, { useEffect, useState } from "react";
import {View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Alert,} from "react-native";
import { useRouter } from "expo-router";
import withAuth from "../../libs/auth/withAuth";
import {fetchUsers, createUser, updateUser, deleteUser, User,} from "../../libs/auth/ServiceUsers/api-services";

const UsersScreen = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [form, setForm] = useState<Partial<User>>({});
  const router = useRouter();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (error) {
      Alert.alert("Error", "Hubo un problema al cargar los usuarios.");
    }
  };

  const handleCreateOrUpdate = async () => {
    if (
      !form.name?.trim() ||
      !form.lastname?.trim() ||
      !form.email?.trim() ||
      !form.country?.trim() ||
      !form.rol?.trim() ||
      !form.username?.trim() ||
      !form.password?.trim()
    ) {
      Alert.alert(
        "Error",
        "Todos los campos son obligatorios y no pueden estar vacíos."
      );
      return;
    }

    try {
      if (editingUser) {
        await updateUser(editingUser.id, form);
        Alert.alert("Éxito", "Usuario actualizado correctamente.");
      } else {
        await createUser(form);
        Alert.alert("Éxito", "Usuario creado correctamente.");
      }
      setForm({});
      setEditingUser(null);
      loadUsers();
    } catch (error) {
      Alert.alert("Error", "Hubo un problema al guardar el usuario.");
    }
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setForm(user);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteUser(id);
      Alert.alert("Éxito", "Usuario eliminado correctamente.");
      loadUsers();
    } catch (error) {
      Alert.alert("Error", "Hubo un problema al eliminar el usuario.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gestión de Usuarios</Text>
      <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
        {users.length > 0 ? (
          users.map((user) => (
            <View key={user.id} style={styles.userCard}>
              <Text style={styles.userName}>
                {user.name} {user.lastname}
              </Text>
              <Text style={styles.userEmail}>Correo: {user.email}</Text>
              <Text style={styles.userCountry}>País: {user.country}</Text>
              <Text style={styles.userRol}>Rol: {user.rol}</Text>
              <View style={styles.actions}>
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => handleEdit(user)}
                  accessibilityLabel={`Editar usuario ${user.name}`}
                >
                  <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDelete(user.id)}
                  accessibilityLabel={`Eliminar usuario ${user.name}`}
                >
                  <Text style={styles.buttonText}>Eliminar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noUsers}>No hay usuarios registrados</Text>
        )}
      </ScrollView>

      <View style={styles.form}>
        <Text style={styles.formHeader}>
          {editingUser ? "Editar Usuario" : "Crear Usuario"}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="#fff"
          value={form.name || ""}
          onChangeText={(text) => setForm({ ...form, name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          placeholderTextColor="#fff"
          value={form.lastname || ""}
          onChangeText={(text) => setForm({ ...form, lastname: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo"
          placeholderTextColor="#fff"
          value={form.email || ""}
          onChangeText={(text) => setForm({ ...form, email: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="País"
          placeholderTextColor="#fff"
          value={form.country || ""}
          onChangeText={(text) => setForm({ ...form, country: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Rol"
          placeholderTextColor="#fff"
          value={form.rol || ""}
          onChangeText={(text) => setForm({ ...form, rol: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Nombre de Usuario"
          placeholderTextColor="#fff"
          value={form.username || ""}
          onChangeText={(text) => setForm({ ...form, username: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#fff"
          value={form.password || ""}
          onChangeText={(text) => setForm({ ...form, password: text })}
          secureTextEntry
        />
        <TouchableOpacity style={styles.saveButton} onPress={handleCreateOrUpdate}>
          <Text style={styles.buttonText}>
            {editingUser ? "Actualizar" : "Crear"}
          </Text>
        </TouchableOpacity>
        {editingUser && (
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => {
              setEditingUser(null);
              setForm({});
            }}
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", paddingHorizontal: 15 },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#f8f8f2",
    marginVertical: 20,
    textAlign: "center",
  },
  userCard: {
    backgroundColor: "#121212",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  userName: { fontSize: 20, fontWeight: "bold", color: "#50fa7b" },
  userEmail: { fontSize: 16, color: "#8be9fd" },
  userCountry: { fontSize: 16, color: "#bd93f9" },
  userRol: { fontSize: 16, color: "#ff79c6" },
  noUsers: {
    fontSize: 18,
    color: "#6272a4",
    textAlign: "center",
    marginTop: 30,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  editButton: { backgroundColor: "#007bff", padding: 10, borderRadius: 5 },
  deleteButton: { backgroundColor: "#ff4444", padding: 10, borderRadius: 5 },
  buttonText: { color: "#fff", fontWeight: "bold" },
  form: {
    backgroundColor: "#222",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  formHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#333",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: "#6c757d",
    padding: 10,
    borderRadius: 5,
  },
});

export default withAuth(UsersScreen, "admin");
