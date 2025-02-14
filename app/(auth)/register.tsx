import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Switch, Alert } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [subscribe, setSubscribe] = useState(false);
  const [country, setCountry] = useState(null);

  const countries = [
    { label: "Colombia", value: "colombia" },
    { label: "México", value: "mexico" },
    { label: "Argentina", value: "argentina" },
  ];

  const handleSubmit = () => {
    if (!acceptTerms) {
      Alert.alert("Error", "Debes aceptar los términos y condiciones.");
      return;
    }
    console.log("Datos de registro:", { email, country, firstName, lastName, username, password, acceptTerms, subscribe });
    Alert.alert("Registro exitoso", "Tu cuenta ha sido creada correctamente.");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../(auth)/logo.png")} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Regístrate</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Dropdown
        style={styles.dropdown}
        data={countries}
        labelField="label"
        valueField="value"
        placeholder="Selecciona tu país"
        placeholderStyle={{ color: "#aaa" }}
        selectedTextStyle={{ color: "#fff" }}
        itemTextStyle={{ color: "#000" }}
        value={country}
        onChange={(item) => setCountry(item.value)}
      />

      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Nombre"
          placeholderTextColor="#aaa"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Apellido"
          placeholderTextColor="#aaa"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Usuario"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.switchContainer}>
        <Switch value={subscribe} onValueChange={setSubscribe} />
        <Text style={styles.switchText}>Recibir noticias y ofertas</Text>
      </View>

      <View style={styles.switchContainer}>
        <Switch value={acceptTerms} onValueChange={setAcceptTerms} />
        <Text style={styles.switchText}>Acepto los términos del servicio</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "#000",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  input: {
    width: 300,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 15,
    color: "#fff",
    backgroundColor: "#222",
  },
  dropdown: {
    width: 300,
    height: 50,
    backgroundColor: "#222",
    borderRadius: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    marginBottom: 15,
  },
  halfInput: {
    flex: 1,
    marginHorizontal: 5,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  switchText: {
    color: "white",
    marginLeft: 10,
    fontSize: 14,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    width: 300,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegisterPage;
