import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import withAuth from "../../libs/auth/withAuth"; 

const UsersScreen = () => {
  interface User {
    id: number;
    name: string;
    lastname: string;
    email: string;
    country: string;
    rol: string;
  }

  const [users, setUsers] = useState<User[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://172.20.10.4:4000/api/v1/auth/users");
        if (!response.ok) {
          throw new Error("Error al obtener los usuarios");
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Usuarios Registrados</Text>
      <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
        {users.length > 0 ? (
          users.map((user) => (
            <View key={user.id} style={styles.userCard}>
              <Text style={styles.userName}>{user.name} {user.lastname}</Text>
              <Text style={styles.userEmail}>Correo: {user.email}</Text>
              <Text style={styles.userCountry}>País: {user.country}</Text>
              <Text style={styles.userRol}>Rol: {user.rol}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noUsers}>No hay usuarios registrados</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", 
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#f8f8f2",
    marginVertical: 20,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },
  userCard: {
    backgroundColor: "#121212",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#50fa7b",
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: "#8be9fd",
    marginBottom: 3,
  },
  userCountry: {
    fontSize: 16,
    color: "#bd93f9",
    marginBottom: 3,
  },
  userRol: {
    fontSize: 16,
    color: "#ff79c6",
  },
  noUsers: {
    fontSize: 18,
    color: "#6272a4",
    textAlign: "center",
    marginTop: 30,
  },
});

export default withAuth(UsersScreen, "admin");
